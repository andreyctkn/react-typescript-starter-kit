module.exports = {
    transform: {
        ".(ts|tsx)": "ts-jest",
    },
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],
    testRegex: "src/.*.spec.(ts|tsx)$",
    rootDir: process.cwd(),
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
