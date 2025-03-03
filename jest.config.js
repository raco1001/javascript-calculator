const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: ".",
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^@entities/(.*)$": "<rootDir>/src/entities/$1",
        "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
        "^@tests/(.*)$": "<rootDir>/src/tests/$1",
    },
    testMatch: [
        "**/tests/*.test.ts"
    ],
    collectCoverage: true,
    coverageDirectory: "<rootDir>/coverage",
    clearMocks: true,
};
export default config;
