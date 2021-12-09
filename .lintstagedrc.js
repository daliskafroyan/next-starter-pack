module.exports = {
    // Run type-check on changes to TypeScript files
    '**/*.(tsx|jsx|js|ts)?(x)': () => 'yarn type-check',
    // Run ESLint on changes to JavaScript/TypeScript files
    '**/*.(tsx|jsx|js|ts)?(x)': (filenames) =>
        `yarn lint . ${filenames.join(' ')}`,
};
