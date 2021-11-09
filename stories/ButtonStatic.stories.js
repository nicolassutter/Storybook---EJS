/**
 * Compilé en string par raw-loader
 */
// import ButtonGhost from '../src/Button-ghost.html'
const ButtonGhost = require('../src/Button-ghost.html')
const ButtonSimple = require('../src/Button-simple.html')
/**
* Styles du bouton
*/
import './button.css'

/**
* Si pas besoin d'option configurable
*/
// const createButton = () => render(Button)

export default {
  title: 'Example/ButtonStatic'
}

const Template = () => ButtonGhost
 
export const Ghost = Template.bind({})
export const Simple = Template.bind({})
