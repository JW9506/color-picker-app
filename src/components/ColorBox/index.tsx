import React from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import clsx from "clsx"
import "./index.scss"
import { Link } from "react-router-dom"

interface Props {
  background: string
  name: string
}

interface State {
  copied: boolean
}

class ColorBox extends React.Component<Props, State> {
  state: State = {
    copied: false,
  }
  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1500)
    })
  }
  render() {
    const { background, name } = this.props
    const { copied } = this.state
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={clsx("copy-overlay", copied && "show")}
            style={{ background }}
          />
          <div className={clsx("copy-msg", copied && "show")}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <Link to="/" onClick={(e) => e.stopPropagation()}>
            <span className="see-more">More</span>
          </Link>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox
