import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import { PaletteShape } from "seedColors"

interface State {
  newPaletteName: string
}

interface Props {
  palettes: PaletteShape[]
  savePalette: (e: React.FormEvent, newPaletteName: string) => void
  handlePaletteNameDialog: () => void
}

class PaletteMetaForm extends React.Component<Props, State> {
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
    const { newPaletteName } = this.state
    const { savePalette, handlePaletteNameDialog } = this.props
    return (
      <Dialog
        open
        aria-labelledby="form-dialog-title"
        onClose={handlePaletteNameDialog}
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={(e) => savePalette(e, newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique
            </DialogContentText>
            <TextValidator
              name="newPaletteName"
              value={newPaletteName}
              placeholder="Palette Name"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              validators={["required", "paletteNameUnique"]}
              errorMessages={[
                "Palette name is required",
                "This palette name has been used",
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handlePaletteNameDialog}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    )
  }
}

export default PaletteMetaForm
