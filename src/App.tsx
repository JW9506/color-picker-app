import React from "react"
import { Route, Switch, RouteComponentProps } from "react-router-dom"
import Palette from "components/Palette"
import seedColors, { PaletteShape } from "seedColors"
import generatePalette from "utils/colorHelper"
import PaletteList from "components/PaletteList"
import SingleCOlorPalette from "components/SingleColorPalette"
import NewPaletteForm from "components/NewPaletteForm"

interface State {
  palettes: PaletteShape[]
}

class App extends React.Component<{}, State> {
  state: State = {
    palettes: seedColors,
  }
  findPalette(id: string) {
    return (
      this.state.palettes.find((palette) => palette.id === id) ||
      this.state.palettes[0]
    )
  }
  savePalette = (newPalette: PaletteShape) => {
    this.setState((s) => ({
      palettes: [...s.palettes, newPalette],
    }))
  }
  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps: RouteComponentProps<{ id: string }>) => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm {...routeProps} savePalette={this.savePalette} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps: RouteComponentProps<{ id: string }>) => (
            <Palette
              {...generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(
            routeProps: RouteComponentProps<{
              paletteId: string
              colorId: string
            }>
          ) => (
            <SingleCOlorPalette
              colorId={routeProps.match!.params.colorId}
              {...generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}

export default App
