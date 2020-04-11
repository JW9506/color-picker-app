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
  constructor(props: {}) {
    super(props)
    let palettes: PaletteShape[]
    const savedPalettes: PaletteShape[] = JSON.parse(
      localStorage.getItem("palettes") || "[]"
    )
    if (savedPalettes.length > 0) palettes = savedPalettes
    else palettes = seedColors
    this.state = {
      palettes,
    }
  }

  findPalette(id: string) {
    return (
      this.state.palettes.find((palette) => palette.id === id) ||
      this.state.palettes[0]
    )
  }

  savePalette = (newPalette: PaletteShape) => {
    this.setState(
      (s) => ({
        palettes: [...s.palettes, newPalette],
      }),
      this.syncLocalStorage
    )
  }

  deletePalette = (id: string) => {
    this.setState(
      (s) => ({
        palettes: s.palettes.filter((p) => p.id !== id),
      }),
      this.syncLocalStorage
    )
  }

  syncLocalStorage() {
    localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render() {
    const { palettes } = this.state
    return (
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          render={(routeProps: RouteComponentProps<{ id: string }>) => (
            <PaletteList
              palettes={palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/palette/new`}
          render={(routeProps) => (
            <NewPaletteForm
              {...routeProps}
              savePalette={this.savePalette}
              palettes={palettes}
            />
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/palette/:id`}
          render={(routeProps: RouteComponentProps<{ id: string }>) => (
            <Palette
              {...generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/palette/:paletteId/:colorId`}
          render={(
            routeProps: RouteComponentProps<{
              paletteId: string
              colorId: string
            }>
          ) => (
            <SingleCOlorPalette
              colorId={routeProps.match.params.colorId}
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
