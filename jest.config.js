module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['./setup-tests.js'],
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
};
