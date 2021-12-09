module.exports = {
    arrowParens: 'always',
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    semi: true,
    plugins: [require('prettier-plugin-sort-class-names')],
    sortClassNamesUnknownClassesSeparator: '',
    sortClassNamesPrefixes:
        'xs:,sm:,md:,lg:,xl:,2xl:,dark:,motion-safe:,motion-reduce:,first:,last:,odd:,even:,visited:,checked:,group-hover:,group-focus:,focus-within:,hover:,focus:,focus-visible:,active:,disabled:',
};
