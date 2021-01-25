module.exports = {
    bracketSpacing: true,
    jsxBracketSameLine: false,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'all',
    singleQuote: true,
    endOfLine: 'lf',
    printWidth: 80,
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            options: {
                parser: 'babel-flow',
            },
        },
    ],
};
