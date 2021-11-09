export const createStory = (g, args, parameters = {}) => {
  const t = g.bind({})

  t.args = args
  t.parameters = parameters

  return t
}