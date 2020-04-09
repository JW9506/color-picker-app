import React from "react"
import { Route, Switch, RouteChildrenProps } from "react-router-dom"
import Palette from "components/Palette"
import seedColors from "seedColors"
import generatePalette from "utils/colorHelper"
import PaletteList from "components/PaletteList"
import SingleCOlorPalette from "components/SingleColorPalette"

function findPalette(id: string) {
  return seedColors.find((palette) => palette.id === id) || seedColors[0]
}

const App: React.FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps: RouteChildrenProps<{ id: string }>) => (
          <PaletteList {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps: RouteChildrenProps<{ id: string }>) => (
          <Palette
            {...generatePalette(findPalette(routeProps.match!.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(
          routeProps: RouteChildrenProps<{ paletteId: string; colorId: string }>
        ) => (
          <SingleCOlorPalette
            colorId={routeProps.match!.params.colorId}
            {...generatePalette(
              findPalette(routeProps.match!.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  )
}

export default App
