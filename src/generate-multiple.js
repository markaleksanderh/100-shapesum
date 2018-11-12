import sketch from 'sketch'
import {text} from './text'
import createParagraph from './create-paragraph'

export default function() {
  // Select layers
  var document = sketch.getSelectedDocument()
  var selectedLayers = document.selectedLayers
  var selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    sketch.UI.message("Select a text layer.")
  } else {
    selectedLayers.forEach(function(layer, i) {
      layer.text = createParagraph()
    })
  }
}
