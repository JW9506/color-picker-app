import React from "react"
import "./index.scss"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import Select, { SelectProps } from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

interface Props {
  level: number
  changeLevel: (level: number) => void
  handleChange: (value: string) => void
}
interface State {
  format: string
}
class Navbar extends React.Component<Props, State> {
  state: State = {
    format: "hex",
  }
  handleSelectChange: SelectProps["onChange"] = (e) => {
    this.setState(
      {
        format: e.target.value as string,
      },
      () => {
        this.props.handleChange(this.state.format)
      }
    )
  }
  render() {
    const { level, changeLevel } = this.props
    const { format } = this.state
    return (
      <header className="Navbar">
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
        <div className="select-container">
          <Select value={format} onChange={this.handleSelectChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default Navbar
