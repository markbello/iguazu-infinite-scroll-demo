module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-amex',
  ],
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}