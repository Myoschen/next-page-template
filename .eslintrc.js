/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier', 'plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva']
    }
  },
  rules: {
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'always', propElementValues: 'always' }]
  }
}
