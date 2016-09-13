module.exports = {
  presets: [
    require('babel-preset-node6')
  ],
  plugins: [
    require('babel-plugin-transform-runtime'),
    require('babel-plugin-transform-class-properties'),
    [require('babel-plugin-transform-builtin-extend').default, { globals: ['Error'] }]
  ]
};
