import React from "react"
import "./index.scss"
import ColorBox from "components/ColorBox"
import { ExpandedPalette } from "utils/colorHelper"
import Navbar from "components/Navbar"

type Props = ExpandedPalette
interface State {
  level: number
}

class Palette extends React.Component<Props, State> {
  state: State = {
    level: 500,
  }
  changeLevel = (level: number) => {
    this.setState({ level })
  }
  render() {
    const { colors } = this.props
    const { level } = this.state
    const colorBoxes = colors[level].map((color) => (
      <ColorBox key={color.hex} background={color.hex} name={color.name} />
    ))
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* bunch of color boxes */}
        {/* footer */}
      </div>
    )
  }
}

export default Palette
