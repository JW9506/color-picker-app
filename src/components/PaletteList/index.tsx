import React from "react"
import { Link } from "react-router-dom"
import { default as palettes } from "seedColors"
import MiniPalette from "components/MiniPalette"

class PaletteList extends React.Component {
  render() {
    return (
      <div className="PaletteList">
        <MiniPalette />
        <h1>React Colors</h1>
        {palettes.map((p) => (
          <p key={Math.random()}>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </p>
        ))}
      </div>
    )
  }
}

export default PaletteList
