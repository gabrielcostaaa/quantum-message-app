// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
      'expo',
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'react-refresh'],
  rules: {
      '@typescript-eslint/no-use-before-define': [
          'warn',
          { functions: false, classes: true, variables: false },
      ],

      'import/extensions': [
          'error',
          'ignorePackages',
          {
              ts: 'never',
              tsx: 'never',
          },
      ],
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': [
          'error',
          {
              maxDepth: '∞',
          },
      ],
      'import/prefer-default-export': 'off',

      'guard-for-in': 'off',
      'no-restricted-syntax': ['error', 'WithStatement'],
      'no-shadow': 'off',
      'no-use-before-define': 'off',

      'prettier/prettier': [
          'error',
          {
              tabWidth: 4,
              endOfLine: 'lf',
              singleQuote: true,
              trailingComma: 'all',
              semi: true,
              arrowParens: 'avoid',
              printWidth: 95,
          },
      ],

      'react-hooks/exhaustive-deps': 'warn',
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [
          1,
          {
              extensions: ['.tsx'],
          },
      ],
      'react/no-array-index-key': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react-refresh/only-export-components': [
          'off',
          {
              allowConstantExport: true,
          },
      ],

      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
  },
  ignorePatterns: ['/dist/*'],
};
