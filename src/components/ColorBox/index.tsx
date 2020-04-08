import React from "react"
import "./index.scss"

interface Props {
  background: string
  name: string
}

class ColorBox extends React.Component<Props> {
  render() {
    const { background, name } = this.props
    return (
      <div className="ColorBox" style={{ background }}>
        <span>{name}</span>
      </div>
    )
  }
}

export default ColorBox
