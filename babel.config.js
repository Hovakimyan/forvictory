module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs',
        'babel-plugin-dynamic-import-node',
        'babel-plugin-styled-components',
        [
            'module-resolver',
            {
                alias: {
                    components: './src/components',
                    pages: './src/pages',
                    constants: './src/constants',
                    helpers: './src/helpers',
                }
            }
        ]
    ]
}
