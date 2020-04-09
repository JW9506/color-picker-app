import React from "react"
import { createStyles, withStyles, WithStyles } from "@material-ui/styles"

const styles = createStyles({
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "white",
    },
  },
  secondary: {
    backgroundColor: "pink",
  },
})

type Props = WithStyles<typeof styles>

const MiniPalette: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>sadfsadf</section>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
