module.exports = {
  "stories": [
    "../src/stories/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "storybook-addon-jsx"
  ],
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: true
      }
    }
  },
  webpackFinal: async (config) => {
    const excludedRules = [ String(/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/) ]
    config.module.rules = config.module.rules
      .filter(rule => !excludedRules.includes(String(rule.test)))
      .concat([
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: false,
            quiet: true
          }
        },
        {
          test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      ])
    return {
      ...config,
      performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      }
    }
  }
}
