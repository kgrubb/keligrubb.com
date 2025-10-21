import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
      'max-len': ['error', { code: 240, ignorePattern: '^import .*' }],
      'no-undef': 'off',
    },
  },
  {
    files: [".nuxt/**/*"],
    rules: {
      'max-len': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
      'no-empty': 'off',
    },
  },
];