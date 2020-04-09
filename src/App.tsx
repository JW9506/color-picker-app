import React from "react"
import { Route, Switch, RouteChildrenProps } from "react-router-dom"
import Palette from "components/Palette"
import seedColors from "seedColors"
import generatePalette from "utils/colorHelper"

function findPalette(id: string) {
  return seedColors.find((palette) => palette.id === id) || seedColors[0]
}

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
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
