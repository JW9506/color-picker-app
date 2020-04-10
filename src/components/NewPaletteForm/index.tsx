import React from "react"
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import clsx from "clsx"
import { ChromePicker, ColorChangeHandler } from "react-color"
import Button from "@material-ui/core/Button"
import DraggableColorBox from "components/DraggableColorBox"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

const drawerWidth = 400
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
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      width: "100%",
      // to control toolbar height and height of first line of text responsively
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: "calc(100vh - 64px)",
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })

interface OwnProps {}

type Props = WithStyles<typeof styles, true> & OwnProps

interface State {
  open: boolean
  currentColor: string
  newName: string
  colors: { color: string; name: string }[]
}

class NewPaletteForm extends React.Component<Props, State> {
  state: State = {
    open: false,
    currentColor: "teal",
    newName: "",
    colors: [],
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  updateCurrentColor: ColorChangeHandler = (result) => {
    this.setState({ currentColor: result.hex })
  }

  addNewColor = (e: React.FormEvent) => {
    e.preventDefault()
    const { newName, currentColor } = this.state
    const newColor = {
      color: currentColor,
      name: newName,
    }
    this.setState((s) => ({
      colors: [...s.colors, newColor],
      newName: "",
    }))
  }

  handleNewNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newName: e.target.value })
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (name: string) => {
      if (
        this.state.colors.every(
          (c) => c.name.toLowerCase() !== name.toLowerCase()
        )
      )
        return true
      return false
    })
    ValidatorForm.addValidationRule("isColorUnique", () => {
      if (this.state.colors.every((c) => c.color !== this.state.currentColor))
        return true
      return false
    })
  }

  render() {
    const { classes, theme } = this.props
    const { open, currentColor, colors, newName } = this.state
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design your palette</Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              name="color-name"
              value={newName}
              onChange={this.handleNewNameChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "This field is required",
                "This color name has been used",
                "This color has been used",
              ]}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={{ backgroundColor: currentColor }}
            >
              Add Color
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {colors.map((c) => (
            <DraggableColorBox
              key={Math.random()}
              name={c.name}
              color={c.color}
            />
          ))}
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
