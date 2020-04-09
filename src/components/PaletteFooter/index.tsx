import React from "react"

interface Props {
  palette: string
  emoji: string
}

const PaletteFooter: React.FC<Props> = ({ palette, emoji }) => {
  return (
    <footer className="pallette-footer">
      {palette}
      <span className="emoji">{emoji}</span>
    </footer>
  )
}

export default PaletteFooter
