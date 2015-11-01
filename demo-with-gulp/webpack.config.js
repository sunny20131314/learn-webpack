module.exports = {
    entry: {
        bundle: './main.js'
    },
    output: {
        path : require("path").resolve("build/"), // output.path field is necessary if using webpack-dev-server API
        filename: '[name].js',
        publicPath : 'build/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.jpeg$/,
                loader: 'url?limit=4'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.less']
    }
};