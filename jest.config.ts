export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDit>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};
