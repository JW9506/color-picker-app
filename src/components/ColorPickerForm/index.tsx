import React from "react"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { ChromePicker, ColorChangeHandler } from "react-color"
import Button from "@material-ui/core/Button"
import { NewColor } from "components/PaletteFormNav"
import {
  createStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles"

interface OwnProps {
  colors: NewColor[]
  isFullColor: boolean
  addNewColor: (e: React.FormEvent, newColor: NewColor) => void
}

const styles = createStyles({
  root: {
    "& .chrome-picker": {
      width: "100% !important",
      marginTop: "2rem",
    },
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
  colorNameInput: {
    width: "100%",
    height: 70,
  },
})

interface State {
  currentColor: string
  newColorName: string
}

type Props = WithStyles<typeof styles> & OwnProps

class ColorPickerForm extends React.Component<Props, State> {
  state: State = {
    currentColor: "teal",
    newColorName: "",
  }

  updateCurrentColor: ColorChangeHandler = (result) => {
    this.setState({ currentColor: result.hex })
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState((s) => ({
      ...s,
      [name]: value,
    }))
  }

  addNewColor = (e: React.FormEvent) => {
    const { newColorName, currentColor } = this.state
    const newColor = {
      color: currentColor,
      name: newColorName,
    }
    this.props.addNewColor(e, newColor)
    this.setState({
      newColorName: "",
    })
  }

  componentDidMount() {
    const { colors } = this.props
    ValidatorForm.addValidationRule("colorNameUnique", (name: string) => {
      if (colors.every((c) => c.name.toLowerCase() !== name.toLowerCase()))
        return true
      return false
    })
    ValidatorForm.addValidationRule("colorUnique", () => {
      if (colors.every((c) => c.color !== this.state.currentColor)) return true
      return false
    })
  }

  render() {
    const { isFullColor, classes } = this.props
    const { currentColor, newColorName } = this.state
    return (
      <div className={classes.root}>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator
            name="newColorName"
            className={classes.colorNameInput}
            label="Color Name"
            variant="filled"
            margin="normal"
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
            className={classes.addColor}
            style={{
              backgroundColor: isFullColor
                ? "rgba(0, 0, 0, 0.12)"
                : currentColor,
            }}
          >
            {isFullColor ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm)
