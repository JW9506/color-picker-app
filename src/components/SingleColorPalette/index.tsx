import React from "react"
import { ExpandedPalette } from "utils/colorHelper"
import ColorBox from "components/ColorBox"

interface OwnProps {
  colorId: string
}
type Props = ExpandedPalette & OwnProps

const SingleColorPalette: React.FC<Props> = ({ colors, colorId }) => {
  const _shades = gatherShades(colors, colorId)
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.hex}
      background={color.hex}
      name={color.name}
      id={color.id}
    />
  ))
  console.log(_shades)
  return (
    <div className="Palette">
      <h1>Single Color P</h1>
      <div className="Palette-colors">{colorBoxes}</div>
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
