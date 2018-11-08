import sketch from 'sketch'
import {text} from './text'


function createParagraph() {
  var arr = text
  var paragraph = []
  for (var i = 0; i < 4; i++) {
    var position = Math.floor(Math.random()*arr.length)
    var phrase = arr[position]
    paragraph.push(phrase)
    arr.splice(position, 1)
  }
  paragraph = paragraph.join(' ')
  return paragraph
}

export default function() {
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
