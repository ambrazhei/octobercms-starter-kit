module.exports = {
    plugins: {
        'postcss-smart-import': {
            addDependencyTo: require('webpack')
        },
        'postcss-url': {
            url: "rebase"
        },
        'postcss-css-variables': {},
        'postcss-nested': {},
        'autoprefixer': {}
    }
};
