module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "android.js", "jsx", "json"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}"],
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
};
