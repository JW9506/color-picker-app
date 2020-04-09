import React from "react"
import { Route, Switch, RouteChildrenProps } from "react-router-dom"
import Palette from "components/Palette"
import seedColors from "seedColors"
import generatePalette from "utils/colorHelper"
import PaletteList from "components/PaletteList"

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
    </Switch>
  )
}

export default App
