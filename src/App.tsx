import React from "react"
import Palette from "components/Palette"
import seedColors from "seedColors"
import generatePalette from "utils/colorHelper"

const App: React.FC = () => {
  return (
    <div>
      <Palette {...generatePalette(seedColors[4])} />
    </div>
  )
}

export default App
