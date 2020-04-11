import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { PaletteShape } from "seedColors"
import clsx from "clsx"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import DraggableColorList from "components/DraggableColorList"
import PaletteFormNav from "components/PaletteFormNav"
import { ChromePicker, ColorChangeHandler } from "react-color"
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

const drawerWidth = 400
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

  updateCurrentColor: ColorChangeHandler = (result) => {
    this.setState({ currentColor: result.hex })
  }

  addNewColor = (e: React.FormEvent) => {
    e.preventDefault()
    const { newColorName, currentColor } = this.state
    const newColor = {
      color: currentColor,
      name: newColorName,
    }
    this.setState((s) => ({
      colors: [...s.colors, newColor],
      newColorName: "",
    }))
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState((s) => ({
      ...s,
      [name]: value,
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

  componentDidMount() {
    ValidatorForm.addValidationRule("colorNameUnique", (name: string) => {
      if (
        this.state.colors.every(
          (c) => c.name.toLowerCase() !== name.toLowerCase()
        )
      )
        return true
      return false
    })
    ValidatorForm.addValidationRule("colorUnique", () => {
      if (this.state.colors.every((c) => c.color !== this.state.currentColor))
        return true
      return false
    })
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
    const { classes, theme, maxColors, palettes } = this.props
    const {
      open,
      currentColor,
      colors,
      newColorName,
    } = this.state
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
          <Typography variant="h4">Design your palette</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearColor}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isFullColor}
              onClick={this.addRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              name="newColorName"
              value={newColorName}
              onChange={this.handleChange}
              validators={["required", "colorNameUnique", "colorUnique"]}
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
              disabled={isFullColor}
              style={{
                backgroundColor: isFullColor
                  ? "rgba(0, 0, 0, 0.12)"
                  : currentColor,
              }}
            >
              {isFullColor ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
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
