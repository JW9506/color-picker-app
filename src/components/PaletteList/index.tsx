import React from "react"
import { default as palettes } from "seedColors"
import MiniPalette from "components/MiniPalette"

class PaletteList extends React.Component {
  render() {
    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {palettes.map((p) => (
          <MiniPalette
            key={Math.random()}
            name={p.paletteName}
            emoji={p.emoji}
          />
        ))}
      </div>
    )
  }
}

export default PaletteList
