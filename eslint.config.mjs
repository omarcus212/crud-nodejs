import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  {
    env: {
      "es6": true,
      "es2020": true,
      "node": true
    },
    extends: "eslint:recommended",
    parserOptions: {
      "ecmaVersion": "latest"
    },
    rules: {
      "no-useless-constructor": "off",
      "eslint-disable-next-line": "no-unused-vars"
    }
  },
  pluginJs.configs.recommended,
];