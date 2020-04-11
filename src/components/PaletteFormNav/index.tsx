import React from "react"
import { Link } from "react-router-dom"
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import clsx from "clsx"
import Button from "@material-ui/core/Button"
import { PaletteShape } from "seedColors"
import PaletteMetaForm from "components/PaletteMetaForm"

export const drawerWidth = 400
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 64,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    navBtns: {
      marginRight: "1rem",
      "& a": {
        textDecoration: "none",
      },
    },
    button: {
      margin: "0 0.5rem",
    },
  })

export interface NewColor {
  color: string
  name: string
}

interface OwnProps {
  open: boolean
  handleDrawerOpen: () => void
  savePalette: (newPaletteName: string, emoji: string) => void
  palettes: PaletteShape[]
}

type Props = WithStyles<typeof styles, true> & OwnProps

interface State {
  formShowing: boolean
}

class PaletteFormNav extends React.Component<Props, State> {
  state: State = {
    formShowing: false,
  }

  handlePaletteNameDialog = () => {
    this.setState((s) => ({
      formShowing: !s.formShowing,
    }))
  }

  render() {
    const {
      classes,
      handleDrawerOpen,
      savePalette,
      open,
      palettes,
    } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to={`${process.env.PUBLIC_URL}/`} className={classes.button}>
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handlePaletteNameDialog}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            savePalette={savePalette}
            handlePaletteNameDialog={this.handlePaletteNameDialog}
          />
        )}
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)
