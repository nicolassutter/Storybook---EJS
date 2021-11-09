export const createStory = (Template, args) => {
  const story = Template.bind({})

  const parameters = {
    docs: {
      source: {
        code: Template(args)
      }
    }
  }

  story.args = args
  story.parameters = parameters

  return { story, args, parameters }
}