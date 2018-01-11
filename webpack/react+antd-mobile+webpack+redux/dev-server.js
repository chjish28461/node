const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configs = require('./webpack.config');
const port  = require('./config/config').port;

//quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=80&sort=changepercent&asc=1&node=hs_a&symbol=&qq-pf-to=pcqq.group
const proxy={
      "/sina": {
        "target": "http://vip.stock.finance.sina.com.cn",
        "pathRewrite": {"^/sina" : ""}
      }
    }
//启动服务
const server = new WebpackDevServer(webpack(configs), {
    stats: {
        colors: true
    },
    proxy:proxy
});

server.listen(port);