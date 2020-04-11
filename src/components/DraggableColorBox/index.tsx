import React from "react"
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles"
import DeleteIcon from "@material-ui/icons/Delete"
import { SortableElement } from "react-sortable-hoc"

const styles = createStyles({
  root: {
    height: "20%",
    width: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-6.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.2)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    color: "rgba(0, 0, 0, 1)",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontSize: 15,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "rgba(0,0,0,0.5)",
    transition: "all 0.3s ease-in-out",
  },
})

interface OwnProps {
  name: string
  color: string
  handleDelete: () => void
}

type Props = WithStyles<typeof styles> & OwnProps

const DraggableColorBox: React.FC<Props> = ({
  color,
  classes,
  name,
  handleDelete,
}) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  )
}

export default withStyles(styles)(SortableElement(DraggableColorBox))