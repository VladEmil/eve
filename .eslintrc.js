// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    __typecheck: true,
    __type: true
  }
}
