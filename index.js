module.exports = {
  presets: [
    require('babel-preset-node5')
  ],
  plugins: [
    require('babel-plugin-transform-runtime'),
    require('babel-plugin-transform-class-properties')
  ]
};