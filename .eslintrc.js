module.exports = {
  env: {
    jest: true,
    node: true,
    browser: true,
    es2021: true,
    "shared-node-browser": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
  },
  ignorePatterns: ["dist/*"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
