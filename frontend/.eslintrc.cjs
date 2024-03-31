module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
     // ensure props are used
     'react/no-unused-prop-types': 'warn',

     // ensure PropTypes are used
     'react/prop-types': 'error',
 
     // enforce destructuring of props
     'react/destructuring-assignment': ['error', 'always'],
  },
}
