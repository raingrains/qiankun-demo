// eslint-plugin-vue eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-plugin-standard @vue/eslint-config-standard babel-eslint -D

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/standard',
    '@vue/prettier', //
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-use-v-if-with-v-for': 'off', // 在vue3中允许if和for同时使用
    'vue/multi-word-component-names': 'off', // 取消组件必须有name字段的要求
    'prettier/prettier': [
      'error',
      {
        // singleQuote: none,
        // semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
