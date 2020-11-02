module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-underscore-dangle": [0, { allow: [] }],
    "no-nested-ternary": "off",
    "react/require-default-props": [0],
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [0, { js: "always", jsx: "always" }],
    "prettier/prettier": 0,
  },
};
