module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/$1',
    '@util/(.*)': '<rootDir>/server/utils/$1',
  },
}
