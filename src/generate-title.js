import sketch from 'sketch'
import {text} from './utils/text'
import getLayers from './utils/get-layers'

export default function() {
  var arr = text
  var phrases = text.filter(phrase => phrase.length < 20)
  var phrase = phrases[Math.floor(Math.random() * phrases.length)]
  const selectedLayers = getLayers()
  if (selectedLayers.length === 0) {
    sketch.UI.message("Select a text layer.")
  } else {
    selectedLayers.forEach(function(layer, i) {
      layer.text = phrase
    })
  }
}
