module.exports = {
  presets: [
    ['latest-node6', { es2015: { loose: true } }]
  ],
  plugins: [
    'transform-runtime',
    'transform-class-properties'
  ]
};