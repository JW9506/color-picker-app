import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import "emoji-mart/css/emoji-mart.css"
import { Picker, EmojiData } from "emoji-mart"
import { PaletteShape } from "seedColors"

interface State {
  newPaletteName: string
  stage: "paletteName" | "emojiPicker"
}

interface Props {
  palettes: PaletteShape[]
  savePalette: (newPaletteName: string, emoji: string) => void
  handlePaletteNameDialog: () => void
}

class PaletteMetaForm extends React.Component<Props, State> {
  state: State = {
    newPaletteName: "",
    stage: "paletteName",
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState((s) => ({
      ...s,
      [name]: value,
    }))
  }

  showEmojiPicker = (e: React.FormEvent) => {
    e.preventDefault()
    this.setState({
      stage: "emojiPicker",
    })
  }

  handleEmojiSelect = (emoji: EmojiData) => {
    const { newPaletteName } = this.state
    if ("native" in emoji) this.props.savePalette(newPaletteName, emoji.native)
    else this.props.savePalette(newPaletteName, emoji.name)
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
    const { newPaletteName, stage } = this.state
    const { handlePaletteNameDialog } = this.props
    return (
      <div>
        <Dialog
          open={stage === "emojiPicker"}
          onClose={handlePaletteNameDialog}
        >
          <DialogTitle id="form-dialog-title">Pick a Palette Emoji</DialogTitle>
          <Picker
            onSelect={this.handleEmojiSelect}
            title=""
            showPreview={false}
            showSkinTones={false}
          />
        </Dialog>
        <Dialog
          open={stage === "paletteName"}
          aria-labelledby="form-dialog-title"
          onClose={handlePaletteNameDialog}
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new beautiful palette. Make sure
                it's unique
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                value={newPaletteName}
                label="Palette Name"
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
        </Dialog>{" "}
      </div>
    )
  }
}

export default PaletteMetaForm
