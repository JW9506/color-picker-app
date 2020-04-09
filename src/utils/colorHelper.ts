import chroma from "chroma-js"
import { PaletteShape } from "seedColors"

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export interface ExpandedPalette {
  palette: string
  id: string
  emoji: string
  colors: { [level: number]: { [field: string]: string }[] }
}

export default function generatePalette(starterPalette: PaletteShape) {
  let newPalette: ExpandedPalette = {
    palette: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  }
  for (const level of levels) newPalette.colors[level] = []
  for (const { color, name } of starterPalette.colors) {
    const scale = generateScale(color, 10).reverse()
    for (const i in scale)
      newPalette.colors[levels[i]].push({
        name: `${name} ${levels[i]}`,
        id: name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      })
  }
  return newPalette
}

function getRange(hexColor: string): string[] {
  const end = "#fff"
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end]
}

function generateScale(hexColor: string, numberOfColors: number): string[] {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}
