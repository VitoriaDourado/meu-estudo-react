module.exports = {
  roots: ['<rootDir>/src'], 
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts' 
  ],
  coverageDirectory: 'coverage', 
  testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest' 
  },
  moduleNameMapper: {
    '\\.png$': '<rootDir>/__mocks__/fileMock.js',
    '@/(.*)': '<rootDir>/src/$1' ,
    '\\.scss$': 'identity-obj-proxy'
  },

  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': 'babel-jest', 
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transformIgnorePatterns: [
    '/node_modules/(?!some-esm-package|another-esm-package)/',
  ],
};
