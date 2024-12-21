// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "merge",
        "delete",
      ],
    ],
    "subject-empty": [2, "never"],
    "subject-min-length": [2, "always", 10],
    "subject-case": [2, "always", "sentence-case"],
    // Add more rules as needed
  },
};
