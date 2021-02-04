module.exports = {
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    amd: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
  },
  plugins: ['html'],
  root: true,
  rules: {
    'no-useless-call': 'error',
    'init-declarations': ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
      },
    ],
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-builtins': [
      'error',
      { version: '>=12.0.0', ignores: [] },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { version: '>=12.0.0', ignores: ['modules'] },
    ],
    'node/no-unsupported-features/node-builtins': [
      'error',
      { version: '>=12.0.0', ignores: [] },
    ],
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        'webpack.js',
        'webpack.*.js',
        'rollup.js',
        'rollup.*.js',
        'gulpfile.js',
        'gulpfile.*.js',
        'postcss.config.js',
        'postcss.*.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
