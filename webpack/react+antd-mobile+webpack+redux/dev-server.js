const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configs = require('./webpack.config');
const port  = require('./config/config').port;

//启动服务
const server = new WebpackDevServer(webpack(configs), {
    stats: {
        colors: true
    },
});

server.listen(port);