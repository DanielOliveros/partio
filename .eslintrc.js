module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/require-default-props': [0, { forbidDefaultForRequired: false, ignoreFunctionalComponents: false }],
    'import/prefer-default-export': 'off',
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'react/forbid-prop-types': [0],
  },
};
