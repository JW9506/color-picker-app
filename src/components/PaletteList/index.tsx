import React from "react"
import { RouteChildrenProps } from "react-router-dom"
import { default as palettes } from "seedColors"
import { createStyles, withStyles, WithStyles } from "@material-ui/styles"
import MiniPalette from "components/MiniPalette"

const styles = createStyles({
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
})

type Props = WithStyles<typeof styles> & RouteChildrenProps

class PaletteList extends React.Component<Props> {
  goToPalette = (id: string) => {
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palette}>
            {palettes.map((p) => (
              <MiniPalette
                key={Math.random()}
                name={p.paletteName}
                emoji={p.emoji}
                colors={p.colors}
                handleClick={() => this.goToPalette(p.id)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
