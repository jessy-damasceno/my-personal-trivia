module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: 'trybe-frontend',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/state-in-constructor': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'warn',
  },
};
