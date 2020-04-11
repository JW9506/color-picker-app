import React from "react"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { ChromePicker, ColorChangeHandler } from "react-color"
import Button from "@material-ui/core/Button"
import { NewColor } from "components/PaletteFormNav"

interface Props {
  colors: NewColor[]
  isFullColor: boolean
  addNewColor: (e: React.FormEvent, newColor: NewColor) => void
}

interface State {
  currentColor: string
  newColorName: string
}

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
      if (
        colors.every(
          (c) => c.name.toLowerCase() !== name.toLowerCase()
        )
      )
        return true
      return false
    })
    ValidatorForm.addValidationRule("colorUnique", () => {
      if (colors.every((c) => c.color !== this.state.currentColor))
        return true
      return false
    })
  }

  render() {
    const { isFullColor } = this.props
    const { currentColor, newColorName } = this.state
    return (
      <>
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
      </>
    )
  }
}

export default ColorPickerForm
