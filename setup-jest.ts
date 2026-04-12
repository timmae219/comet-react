const matchers = require("jest-extended");
expect.extend(matchers);

jest.mock('marked', () => ({
  marked: {
    parse: jest.fn((text: string) => `<p>${text}</p>`),
  },
}));

afterEach(() => {
  jest.useRealTimers();
});

export {};
