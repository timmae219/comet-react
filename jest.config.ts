module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  collectCoverage: true,

  collectCoverageFrom: [
    '**/src/App.tsx',
    '**/src/components/**/*.{ts,tsx}',
    '**/src/redux/**/*.{ts,tsx}',
    '**/src/models/*.{ts,tsx}',
    '**/src/services/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts'
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.tsx',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  fakeTimers: {
    'enableGlobally': true
  }
};

export { }