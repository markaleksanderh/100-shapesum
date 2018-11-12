import sketch from 'sketch'
import createParagraph from './utils/create-paragraph'
import getLayers from './utils/get-layers'

export default function() {
  const selectedLayers = getLayers()
  if (selectedLayers.length === 0) {
    sketch.UI.message("Select a text layer.")
  } else {
    selectedLayers.forEach(function(layer, i) {
      layer.text = createParagraph()
    })
  }
}
