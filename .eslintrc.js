module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'babel',
    'vue',
    // "@babel/plugin-proposal-nullish-coalescing-operator",
    // "@babel/plugin-syntax-optional-chaining"
  ],
  rules: {
    "linebreak-style": 0,
    "no-unused-expressions": 0,
    "babel/no-unused-expressions": 1,
    'max-len': ["error", { "code": 180 }]
    // "@babel/plugin-syntax-nullish-coalescing-operator": 2
  },
};
