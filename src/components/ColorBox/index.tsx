import React from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import clsx from "clsx"
import "./index.scss"
import { Link } from "react-router-dom"
import chroma from "chroma-js"

interface Props {
  background: string
  name: string
  id: string
  paletteId?: string
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
    const { background, name, id, paletteId } = this.props
    const { copied } = this.state
    const isDarkColor = chroma(background).luminance() <= 0.08
    const isLightColor = chroma(background).luminance() >= 0.5
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background }}>
          <div
            className={clsx("copy-overlay", copied && "show")}
            style={{ background }}
          />
          <div
            className={clsx(
              "copy-msg",
              copied && "show",
              isDarkColor && "light-text",
              isLightColor && "dark-text"
            )}
          >
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className={clsx("box-content", isDarkColor && "light-text")}>
              <span>{name}</span>
            </div>
            <button
              className={clsx(
                "copy-button",
                isDarkColor && "light-text",
                isLightColor && "dark-text"
              )}
            >
              Copy
            </button>
          </div>
          {paletteId && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={clsx("see-more", isLightColor && "dark-text")}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox
