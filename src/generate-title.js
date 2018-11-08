import sketch from 'sketch'
import {text} from './text'

var arr = text
var phrases = text.filter(phrase => phrase.length < 30)

export default function() {
  var phrase = phrases[Math.floor(Math.random()*phrases.length)]
  sketch.UI.message(phrase)
}
