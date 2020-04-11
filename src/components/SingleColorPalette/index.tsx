import React, { useState } from "react"
import { FormatType } from "utils/colorHelper"
import { ExpandedPalette } from "utils/colorHelper"
import ColorBox from "components/ColorBox"
import Navbar from "components/Navbar"
import PaletteFooter from "components/PaletteFooter"
import { Link } from "react-router-dom"

interface OwnProps {
  colorId: string
}
type Props = ExpandedPalette & OwnProps

const SingleColorPalette: React.FC<Props> = ({
  palette,
  id,
  colors,
  colorId,
  emoji,
}) => {
  const [state, setState] = useState<{ format: FormatType }>({ format: "hex" })
  const changeFormat = (value: FormatType) => {
    setState({ format: value })
  }
  const _shades = gatherShades(colors, colorId)
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.hex}
      background={color[state.format]}
      name={color.name}
      id={color.id}
    />
  ))
  return (
    <div className="SingleColorPalette Palette">
      <Navbar handleChange={changeFormat} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link className="back-button" to={`${process.env.PUBLIC_URL}/palette/${id}`}>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter palette={palette} emoji={emoji} />
    </div>
  )
}

export default SingleColorPalette

function gatherShades(colors: ExpandedPalette["colors"], colorId: string) {
  let shades = []
  for (const key in colors) {
    shades.push(colors[key].filter((c) => c.id === colorId)[0])
  }
  return shades.slice(1)
}
