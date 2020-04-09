import React from "react"
import "./index.scss"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

interface Props {
  level: number
  changeLevel: (level: number) => void
}
class Navbar extends React.Component<Props> {
  render() {
    const { level, changeLevel } = this.props
    return (
      <div className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
