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
  open: boolean
  newPaletteName: string
}

interface Props {
  palettes: PaletteShape[]
  savePalette: (e: React.FormEvent, newPaletteName: string) => void
}

class PaletteMetaForm extends React.Component<Props, State> {
  state: State = {
    open: false,
    newPaletteName: "",
  }

  handleClickOpen = () => {
    this.setState((s) => ({
      open: !s.open,
    }))
  }

  handleClose = () => {
    this.setState((s) => ({
      open: !s.open,
    }))
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
    const { open, newPaletteName } = this.state
    const { savePalette } = this.props
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open form dialog
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <ValidatorForm
              onSubmit={(e) => savePalette(e, newPaletteName)}
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default PaletteMetaForm
