/**
 * Converti un objet js en styles prêts pour l'attribut style="" HTML
 */
export const getStyles = (styles) => {
  return Object.entries(styles)
    .map(([key, value]) => `${key}:${value}`)
    .join('')
}