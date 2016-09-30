module.exports = {
  presets: [
    require('babel-preset-node6'),
    require('babel-preset-react')
  ],
  plugins: [
    require('babel-plugin-syntax-async-functions'),
    require('babel-plugin-transform-class-properties'),
    [require('babel-plugin-transform-builtin-extend').default, { globals: ['Error'] }],
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-runtime'),
  ]
};
