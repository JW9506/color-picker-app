import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { PaletteShape } from "seedColors"
import clsx from "clsx"
import DraggableColorList from "components/DraggableColorList"
import PaletteFormNav, { drawerWidth } from "components/PaletteFormNav"
import { SortEndHandler, SortEventWithTag, SortEvent } from "react-sortable-hoc"
import arrayMove from "array-move"
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Button from "@material-ui/core/Button"
import ColorPickerForm from "components/ColorPickerForm"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      alignItems: "center",
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
    container: {
      width: "90%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    buttons: {
      width: "100%",
    },
    button: {
      width: "50%",
    },
  })

interface OwnProps {
  savePalette: (newPalette: PaletteShape) => void
  palettes: PaletteShape[]
  maxColors: number
}

type Props = WithStyles<typeof styles, true> & RouteComponentProps & OwnProps

export interface NewColor {
  color: string
  name: string
}

interface State {
  open: boolean
  currentColor: string
  newColorName: string
  colors: NewColor[]
}

class NewPaletteForm extends React.Component<Props, State> {
  static defaultProps = {
    maxColors: 20,
  }
  state: State = {
    open: false,
    currentColor: "teal",
    newColorName: "",
    colors: this.props.palettes[0] ? this.props.palettes[0].colors : [],
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  addNewColor = (e: React.FormEvent, newColor: NewColor) => {
    e.preventDefault()
    this.setState((s) => ({
      colors: [...s.colors, newColor],
    }))
  }

  savePalette = (e: React.FormEvent, newPaletteName: string) => {
    e.preventDefault()
    const newPalette: PaletteShape = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "",
      colors: this.state.colors,
    }
    this.props.savePalette(newPalette)
    this.props.history.push("/")
  }

  handleDelete = (colorName: string) => {
    this.setState((s) => ({
      ...s,
      colors: this.state.colors.filter((c) => c.name !== colorName),
    }))
  }

  shouldCancelStart = (e: SortEvent | SortEventWithTag) => {
    if ("tagName" in e.target)
      return e.target.tagName === "path" || e.target.tagName === "svg"
    return false
  }

  onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }))
  }

  clearColor = () => this.setState({ colors: [] })

  addRandomColor = () => {
    const allColors = this.props.palettes.flatMap((p) => p.colors)
    const randIdx = Math.floor(Math.random() * allColors.length)
    this.setState((s) => ({
      colors: [...s.colors, allColors[randIdx]],
    }))
  }

  render() {
    const { classes, theme, maxColors, palettes } = this.props
    const { open, currentColor, colors, newColorName } = this.state
    const isFullColor = maxColors <= colors.length
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
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
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>Design your palette</Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearColor}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={isFullColor}
                onClick={this.addRandomColor}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              colors={colors}
              isFullColor={isFullColor}
              addNewColor={this.addNewColor}
            />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            handleDelete={this.handleDelete}
            axis="xy"
            shouldCancelStart={this.shouldCancelStart}
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)
