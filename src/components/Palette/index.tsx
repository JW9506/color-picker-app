import React from "react"
import { PaletteShape } from "seedColors"

type Props = PaletteShape

class Palette extends React.Component<Props> {
  render() {
    return <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-colors"></div>
      {/* bunch of color boxes */}
      {/* footer */}
    </div>
  }
}

export default Palette
