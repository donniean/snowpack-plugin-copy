module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
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
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
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
    'node/no-unsupported-features/es-syntax': [
      'error',
      { version: '>=14.0.0', ignores: ['modules'] },
    ],
  },
  overrides: [
    {
      files: [
        '**/webpack.js',
        '**/webpack.*.js',
        '**/webpack.ts',
        '**/webpack.*.ts',
        '**/postcss.*.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
