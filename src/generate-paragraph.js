import sketch from 'sketch'
import {text} from './text'



export default function() {
  var arr = text
  var str = ""
  for (var i = 0; i < 4; i++) {
    var position = Math.floor(Math.random()*arr.length)
    var phrase = arr[position]
    str += ". " + phrase
    arr.splice(position, 1)
  }
  var document = sketch.getSelectedDocument()
  var selectedLayers = document.selectedLayers
  var selectedCount = selectedLayers.length
  if (selectedCount === 0) {
    sketch.UI.message("Select a text layer.")
  } else {
    selectedLayers.forEach(function(layer, i) {
      layer.text = str
    })
  }
  // sketch.UI.message(str)
}


// export default function() {
//   var arr = text
//   var phrases = text.filter(phrase => phrase.length < 20)
//   var phrase = phrases[Math.floor(Math.random() * phrases.length)]
//   // sketch.UI.message(phrase)
//   var document = sketch.getSelectedDocument()
//   var selectedLayers = document.selectedLayers
//   var selectedCount = selectedLayers.length
//   console.log(selectedCount)
//   if (selectedCount === 0) {
//     sketch.UI.message("Select a text layer.")
//   } else {
//     selectedLayers.forEach(function(layer, i) {
//       layer.text = phrase
//     })
//   }
// }
