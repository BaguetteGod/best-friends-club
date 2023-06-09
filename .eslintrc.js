module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    axios: 'readonly',
    route: 'readonly',
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@nuxtjs/eslint-config-typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'prettier', '@typescript-eslint', 'import'],
  ignorePatterns: ['vite.config.js', 'tailwind.config.js'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'import/no-unresolved': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'no-param-reassign': 0,
    'no-unused-vars': 'error',
    'no-shadow': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    '@typescript-eslint/no-useless-constructor': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        json: 'never',
        ts: 'never',
      },
    ],
  },
};
