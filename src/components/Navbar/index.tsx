import React from "react"
import "./index.scss"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import Select, { SelectProps } from "@material-ui/core/Select"
import { FormatType } from "utils/colorHelper"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "react-router-dom"

interface Props {
  level?: number
  changeLevel?: (level: number) => void
  handleChange: (value: FormatType) => void
}
interface State {
  format: FormatType
  open: boolean
}
class Navbar extends React.Component<Props, State> {
  state: State = {
    format: "hex",
    open: false,
  }
  handleSelectChange: SelectProps["onChange"] = (e) => {
    this.setState(
      (s) => ({
        format: e.target.value as FormatType,
        open: !s.open,
      }),
      () => {
        this.props.handleChange(this.state.format)
      }
    )
  }
  closeSnackbar = () => {
    this.setState((s) => ({
      open: !s.open,
    }))
  }
  render() {
    const { level, changeLevel } = this.props
    const { format, open } = this.state
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to={`${process.env.PUBLIC_URL}/`}>reactcolorpicker</Link>
        </div>
        {level && changeLevel && (
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
        )}

        <div className="select-container">
          <Select value={format} onChange={this.handleSelectChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}!
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    )
  }
}

export default Navbar
