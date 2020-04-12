import React from "react"
import { PaletteShape } from "seedColors"
import { createStyles, withStyles, WithStyles } from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"

const styles = createStyles({
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "white",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: 20,
    height: 20,
    position: "absolute",
    right: 0,
    top: 0,
    padding: 1,
    zIndex: 10,
    opacity: 0,
    transition: "all 0.3s ease-in-out",
  },
})

interface OwnProps {
  name: string
  emoji: string
  colors: PaletteShape["colors"]
  handleClick: () => void
  togglePaletteDel: () => void
}

type Props = WithStyles<typeof styles> & OwnProps

const MiniPalette: React.FC<Props> = ({
  classes,
  name,
  emoji,
  colors,
  handleClick,
  togglePaletteDel: _togglePaletteDel,
}) => {
  const miniColorBoxes = colors.map((c) => (
    <div
      key={c.name}
      className={classes.miniColor}
      style={{ backgroundColor: c.color }}
    ></div>
  ))

  const togglePaletteDel = (e: React.MouseEvent) => {
    e.stopPropagation()
    _togglePaletteDel()
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={togglePaletteDel} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {name} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
