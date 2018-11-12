import sketch from 'sketch'
import createParagraph from './utils/create-paragraph'
import getLayers from './utils/get-layers'

export default function() {
  const selectedLayers = getLayers()
  if (selectedLayers.length === 0) {
    sketch.UI.message("Select a text layer.")
  } else {
    var paragraphNumbers = parseInt(sketch.UI.getStringFromUser("How many paragraphs do you want to generate?", "1"))
    selectedLayers.forEach(function(layer, i) {
      var paragraphs = []
      for (var i = 0; i < paragraphNumbers; i++) {
        paragraphs.push(createParagraph())
      }
      layer.text = paragraphs.join("\n\n")
    })
  }
}
