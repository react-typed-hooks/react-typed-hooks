const path = require("path");

module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/__test__/**",
    "!**/node_modules/**",
    "!**/dist/**",
  ],
  setupFiles: ["jest-localstorage-mock"],
  setupFilesAfterEnv: [path.join(__dirname, "jest", "jest.setup.js")],
};
