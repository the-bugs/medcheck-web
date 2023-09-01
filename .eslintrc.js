module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    // Suas regras personalizadas aqui
    'no-unused-vars': 'error', // Reportar variáveis não utilizadas
    quotes: ['error', 'single'], // Use aspas simples
    semi: ['error', 'always'], // Sempre use ponto e vírgula
  },
};
