module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist/'
  },
  module: {
    rules: [
      {
        test: /locales/,
        loader: '@alienfast/i18next-loader'
      }
    ]
  }
};
