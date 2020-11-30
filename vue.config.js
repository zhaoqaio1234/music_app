module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(html)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                }
            ]
        }
    },
    // devServer: {
    //     disableHostCheck: false,
    //     // host: "172.20.10.5",
    //     port: 8080,
    //     https: false,
    //     hotOnly: false,
    //     proxy: null
    // },
}