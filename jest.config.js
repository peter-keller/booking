module.exports = {
  moduleNameMapper: {
    '.+\\.svg?.+$': 'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
    'svg'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
    // '.+\\.svg?.+$': 'jest-transform-stub',
    // '.+\\.(svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/unit/setup/index.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
}
