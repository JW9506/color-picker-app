import React from "react"
import "./index.scss"
import ColorBox from "components/ColorBox"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { ExpandedPalette } from "utils/colorHelper"

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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* bunch of color boxes */}
        {/* footer */}
      </div>
    )
  }
}

export default Palette
