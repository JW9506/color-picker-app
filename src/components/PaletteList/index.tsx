import React from "react"
import { Link } from "react-router-dom"
import { default as palettes } from "seedColors"

class PaletteList extends React.Component {
  render() {
    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {palettes.map((p) => (
          <p>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </p>
        ))}
      </div>
    )
  }
}

export default PaletteList
