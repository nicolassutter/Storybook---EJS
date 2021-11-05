const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.ejs$/,
      use: [
        {
          loader: 'raw-loader',
          options: {
            esModule: false
          }
        }
      ],
      include: path.resolve(__dirname, '../src')
    })

    return config;
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}