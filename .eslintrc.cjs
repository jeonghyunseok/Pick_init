/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'vue/multi-word-component-names': 0,
    // '@typescript-eslint/typedef': [
    //   'error',
    //   {
    //     arrayDestructuring: true,
    //     arrowParameter: true,
    //     memberVariableDeclaration: true,
    //     // objectDestructuring: true,
    //     parameter: true,
    //     propertyDeclaration: true,
    //     variableDeclaration: true,
    //     variableDeclarationIgnoreFunction: true,
    //   },
    // ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      0,
      {
        endOfLine: 'auto'
      }
    ]
  }
};
