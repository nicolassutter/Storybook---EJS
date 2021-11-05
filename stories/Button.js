import ejs from './../ejs.min.js'
import Button from '../src/Button.ejs'
import './button.css'

export const createButton = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const classes = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

  const styles = Object.entries({
  })
    .map(([key, value]) => `${key}:${value}`)
    .join(';')

  return ejs.render(Button, { classes, styles, label })
};
