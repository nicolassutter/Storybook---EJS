export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    transformSource: (src, storyContext) => storyContext.storyFn()
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}