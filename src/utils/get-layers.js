import sketch from 'sketch'

export default function getLayers(){
  const document = sketch.getSelectedDocument()
  const selectedLayers = document.selectedLayers
  return selectedLayers
}
