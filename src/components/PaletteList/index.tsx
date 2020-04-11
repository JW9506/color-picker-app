import React from "react"
import { RouteChildrenProps, Link } from "react-router-dom"
import { PaletteShape } from "seedColors"
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
    alignItems: "center",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
})

interface OwnProps {
  palettes: PaletteShape[]
  deletePalette: (id: string) => void
}

type Props = WithStyles<typeof styles> & RouteChildrenProps & OwnProps

class PaletteList extends React.Component<Props> {
  goToPalette = (id: string) => {
    this.props.history.push(`${process.env.PUBLIC_URL}/palette/${id}`)
  }
  render() {
    const { classes, palettes, deletePalette } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to={`${process.env.PUBLIC_URL}/palette/new`}>Create Palette</Link>
          </nav>
          <div className={classes.palette}>
            {palettes.map((p) => (
              <MiniPalette
                key={Math.random()}
                name={p.paletteName}
                emoji={p.emoji}
                colors={p.colors}
                deletePalette={() => deletePalette(p.id)}
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
