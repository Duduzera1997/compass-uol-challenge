module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['app/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['./setup-tests.js'],
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
};
