import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { ignores: [".nuxt/**", ".output/**"] },
  { files: ["**/*.{js,mjs,cjs,vue}"] },
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
];