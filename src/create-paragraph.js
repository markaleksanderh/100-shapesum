import sketch from 'sketch'
import {text} from './text'

export default function createParagraph() {
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
