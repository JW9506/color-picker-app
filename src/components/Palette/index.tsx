import React from "react"
import "./index.scss"
import ColorBox from "components/ColorBox"
import { PaletteShape } from "seedColors"

type Props = PaletteShape

class Palette extends React.Component<Props> {
  render() {
    const { colors } = this.props
    const colorBoxes = colors.map((c) => (
      <ColorBox key={c.color} background={c.color} name={c.name} />
    ))
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* bunch of color boxes */}
        {/* footer */}
      </div>
    )
  }
}

export default Palette
