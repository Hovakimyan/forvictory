module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
    plugins: [
        '@babel/plugin-transform-flow-strip-types',
        '@babel/plugin-proposal-class-properties',
        'transform-es2015-modules-commonjs',
        'babel-plugin-dynamic-import-node',
        'babel-plugin-styled-components',
        [
            'module-resolver',
            {
                alias: {
                    reduxStore: './src/redux-store',
                    components: './src/components',
                    containers: './src/containers',
                    constants: './src/constants',
                    helpers: './src/helpers',
                    api: './src/api'
                }
            }
        ]
    ]
}
