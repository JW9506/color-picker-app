import React from "react"
import { SortableContainer } from "react-sortable-hoc"
import DraggableColorBox from "components/DraggableColorBox"
import { NewColor } from "components/NewPaletteForm"

interface Props {
  colors: NewColor[]
  handleDelete: (colorName: string) => void
}

const DraggableColorList: React.FC<Props> = ({ colors, handleDelete }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((c, idx) => (
        <DraggableColorBox
          index={idx}
          key={Math.random()}
          name={c.name}
          color={c.color}
          handleDelete={() => handleDelete(c.name)}
        />
      ))}
    </div>
  )
}

export default SortableContainer(DraggableColorList)
