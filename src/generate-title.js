import sketch from 'sketch'
import {text} from './utils/text'
import getLayers from './utils/get-layers'
import createSentence from './utils/create-sentence'

export default function() {
  const selectedLayers = getLayers()
  if (selectedLayers.length === 0) {
    sketch.UI.message("Select a text layer.")
  } else {
    selectedLayers.forEach(function(layer, i) {
      layer.text = createSentence()
    })
  }
}
