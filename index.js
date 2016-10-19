module.exports = {
  presets: [
    ['latest-node6', { es2015: { loose: true } }],
    'react'
  ],
  plugins: [
    'transform-class-properties',
    ['transform-builtin-extend', { globals: ['Error'] }],
    'transform-runtime',
  ]
};
