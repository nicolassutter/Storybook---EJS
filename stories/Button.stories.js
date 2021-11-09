/**
 * Compilé en string par raw-loader
 */
const Button = require('../src/Button.ejs')

import { render } from '../render.js'

import { getStyles } from '../getStyles.js'
import { createStory } from '../createStory.js'

/**
 * Styles du bouton
 */
import './button.css'

/**
 * Pas nécéssaire si aucune option n'est configurable
 */
const createButton = ({ primary = false, variant = 'filled', label }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  const classes = ['storybook-button storybook-button--medium', variant, mode].join(' ')
  const styles = getStyles({})

  return render(Button, { classes, styles, label })
}

/**
 * Si pas besoin d'option configurable
 */
// const createButton = () => render(Button)

export default {
  title: 'Example/Button',

  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'ghost'],
    }
  }
}

const Template = (args) => createButton(args)

export const Default = createStory(Template, { variant: 'filled', label: 'Hello' })

export const Filled = createStory(Template, { variant: 'filled', primary: true, label: 'Hello' })
export const Ghost = createStory(Template, { variant: 'ghost', primary: true, label: 'Hello' })
