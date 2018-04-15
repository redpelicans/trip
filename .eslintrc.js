module.exports = {
  // parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-return-assign': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'arrow-body-style': 'off',
    'no-tabs': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': ['error', { allow: ['__'] }],
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'require-yield': 0,
  },
};
