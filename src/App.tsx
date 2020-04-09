import React from "react"
import Palette from "components/Palette"
import seedColors from "seedColors"
import generatePalette from "utils/colorHelper"

const App: React.FC = () => {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  )
}

export default App
