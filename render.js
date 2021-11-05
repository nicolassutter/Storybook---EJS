/**
 * Pour compiler l'ejs
 */
import ejs from './ejs.min.js'

/**
 * Méthode récursive pour compiler un composant et ses dépendances
 *
 * @param {String} component - Version stringifiée d'un composant
 * @param {Object.<string, any>} params - Data pour le composant
 * @returns {String} Composant complet avec ses dépendances
 * 
 * @see https://ejs.co/ -> #caveats
 */
export const render = (component, params = {}) => {
  const compile = ejs.compile(component, { client: true })

  const cb = (path, data) => {
    const _path = path.replace('.ejs', '')

    /**
     * Si une dépendance existe, sinon fin de récursivité
     */
    if (_path) {
      const file = require(`./src/${_path}.ejs`)
      return ejs.compile(file, { client: true })(data, null, cb)
    }

    return ''
  }

  return compile(params, null, cb)
}