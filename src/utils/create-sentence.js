import sketch from 'sketch'
import {text} from './text'

export default function createSentence() {
  var arr = text
  var phrases = text.filter(phrase => phrase.length < 20)
  var phrase = phrases[Math.floor(Math.random() * phrases.length)]
  return phrase
}
