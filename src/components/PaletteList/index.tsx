import React from "react"
import { RouteChildrenProps, Link } from "react-router-dom"
import { PaletteShape } from "seedColors"
import { createStyles, withStyles, WithStyles } from "@material-ui/styles"
import MiniPalette from "components/MiniPalette"
import { querySizeDown } from "utils/styleMediaQuery"
import bg from "utils/bg.svg"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import List from "@material-ui/core/List"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"
import CheckRounded from "@material-ui/icons/CheckRounded"
import CancelRounded from "@material-ui/icons/CancelRounded"

const styles = createStyles({
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.5s ease-out",
    },
  },
  root: {
    backgroundColor: "#5f77aa",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [querySizeDown("lg")]: {
      width: "80%",
    },
    [querySizeDown("md")]: {
      width: "90%",
    },
    [querySizeDown("xs")]: {
      width: "70%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    lineHeight: "4rem",
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
    gridGap: "5rem",
    [querySizeDown("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1rem 1rem",
    },
    [querySizeDown("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
})

interface OwnProps {
  palettes: PaletteShape[]
  deletePalette: (id: string) => void
}

type Props = WithStyles<typeof styles> & RouteChildrenProps & OwnProps

interface State {
  openDeleteDialog: boolean
  currentPaletteToDel: string
}

class PaletteList extends React.Component<Props, State> {
  state: State = {
    openDeleteDialog: false,
    currentPaletteToDel: "",
  }

  openDialog = (paletteId: string) => {
    this.setState({
      openDeleteDialog: true,
      currentPaletteToDel: paletteId,
    })
  }

  closeDialog = () => {
    this.setState({
      openDeleteDialog: false,
      currentPaletteToDel: "",
    })
  }

  confirmDeletePalette = () => {
    const { deletePalette } = this.props
    const { currentPaletteToDel } = this.state
    deletePalette(currentPaletteToDel)
    this.closeDialog()
  }

  goToPalette = (id: string) => {
    this.props.history.push(`${process.env.PUBLIC_URL}/palette/${id}`)
  }

  render() {
    const { classes, palettes } = this.props
    const { openDeleteDialog } = this.state
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to={`${process.env.PUBLIC_URL}/palette/new`}>
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palette}>
            {palettes.map((p) => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  name={p.paletteName}
                  emoji={p.emoji}
                  colors={p.colors}
                  togglePaletteDel={() => this.openDialog(p.id)}
                  handleClick={() => this.goToPalette(p.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.confirmDeletePalette}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[600] }}>
                  <CheckRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[600] }}>
                  <CancelRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
