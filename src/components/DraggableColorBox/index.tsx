import React from "react"
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles"

const styles = createStyles({
  root: {
    height: "20%",
    width: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
  },
})

interface OwnProps {
  name: string
  color: string
}

type Props = WithStyles<typeof styles> & OwnProps

const DraggableColorBox: React.FC<Props> = ({ color, classes, name }) => {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name} - {color}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
