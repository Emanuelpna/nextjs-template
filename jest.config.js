const nextJest = require('next/jest')
const path = require('path')

const createJestConfig = nextJest({ dir: path.join() })

const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_module/'],
  moduleDirectories: ['node_modules', 'src', '.jest'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(t|j)s(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'jsx']
}

module.exports = createJestConfig(customJestConfig)
