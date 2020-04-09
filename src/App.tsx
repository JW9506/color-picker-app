import React from "react"
import { Route, Switch } from "react-router-dom"
import Palette from "components/Palette"
import seedColors from "seedColors"
import generatePalette from "utils/colorHelper"

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <Palette {...generatePalette(seedColors[4])} />}
      />
    </Switch>
  )
}

export default App
