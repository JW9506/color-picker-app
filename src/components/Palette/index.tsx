import React from "react"
import "./index.scss"
import ColorBox from "components/ColorBox"
import { ExpandedPalette, FormatType } from "utils/colorHelper"
import Navbar from "components/Navbar"

type Props = ExpandedPalette
interface State {
  level: number
  format: FormatType
}

class Palette extends React.Component<Props, State> {
  state: State = {
    level: 500,
    format: "hex",
  }
  changeLevel = (level: number) => {
    this.setState({ level })
  }
  changeFormat = (value: FormatType) => {
    this.setState({ format: value })
  }
  render() {
    const { colors, palette, emoji, id } = this.props
    const { level, format } = this.state
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color[format]}
        id={color.id}
        paletteId={id}
      />
    ))
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="pallette-footer">
          {palette}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    )
  }
}

export default Palette
