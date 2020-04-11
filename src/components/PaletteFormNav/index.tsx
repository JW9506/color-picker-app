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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { PaletteShape } from "seedColors"

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
    navBtns: {},
  })

export interface NewColor {
  color: string
  name: string
}

interface OwnProps {
  open: boolean
  handleDrawerOpen: () => void
  savePalette: (e: React.FormEvent, newPaletteName: string) => void
  palettes: PaletteShape[]
}

type Props = WithStyles<typeof styles, true> & OwnProps

interface State {
  newPaletteName: string
}

class PaletteFormNav extends React.Component<Props, State> {
  state: State = {
    newPaletteName: "",
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState((s) => ({
      ...s,
      [name]: value,
    }))
  }

  componentDidMount() {
    ValidatorForm.addValidationRule(
      "paletteNameUnique",
      (paletteName: string) => {
        if (
          this.props.palettes.every(
            (p) => p.paletteName.toLowerCase() !== paletteName.toLowerCase()
          )
        )
          return true
        return false
      }
    )
  }

  render() {
    const { classes, handleDrawerOpen, savePalette, open } = this.props
    const { newPaletteName } = this.state
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
            <ValidatorForm
              onSubmit={(e) => savePalette(e, this.state.newPaletteName)}
            >
              <TextValidator
                name="newPaletteName"
                value={newPaletteName}
                placeholder="Palette Name"
                onChange={this.handleChange}
                validators={["required", "paletteNameUnique"]}
                errorMessages={[
                  "Palette name is required",
                  "This palette name has been used",
                ]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)
