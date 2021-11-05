/**
 * Compilé en string par raw-loader
 */
const Button = require('../src/Button.ejs')

import { render } from '../render.js'

import { getStyles } from '../getStyles.js'

/**
 * Styles du bouton
 */
import './button.css'

/**
 * Pas nécéssaire si aucune option n'est configurable
 */
const createButton = ({ primary = false, size = 'medium', label }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  const classes = ['storybook-button', `storybook-button--${size}`, mode].join(' ')
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
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }
  }
}

const Template = (args) => createButton(args)

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button'
}
