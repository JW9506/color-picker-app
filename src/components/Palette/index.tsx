import React from "react"
import "./index.scss"
import ColorBox from "components/ColorBox"
import { ExpandedPalette } from "utils/colorHelper"
import Navbar from "components/Navbar"

type Props = ExpandedPalette
interface State {
  level: number
  format: string
}

class Palette extends React.Component<Props, State> {
  state: State = {
    level: 500,
    format: "hex",
  }
  changeLevel = (level: number) => {
    this.setState({ level })
  }
  changeFormat = (value: string) => {
    this.setState({ format: value })
  }
  render() {
    const { colors } = this.props
    const { level, format } = this.state
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color[format]}
        background={color[format]}
        name={color[format]}
      />
    ))
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* bunch of color boxes */}
        {/* footer */}
      </div>
    )
  }
}

export default Palette
