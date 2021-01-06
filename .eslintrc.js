module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'curly': 'off',
    'arrow-parens': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off'
  }
}
