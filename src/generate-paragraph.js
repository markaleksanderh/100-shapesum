import sketch from 'sketch'
import {text} from './text'

var arr = text

export default function() {
  var str = ""
  for (var i = 0; i < 4; i++) {
    var position = Math.floor(Math.random()*arr.length)
    var phrase = arr[position]
    str += ". " + phrase
    arr.splice(position, 1)
  }
  sketch.UI.message(str)
}
