var utils = require('./utils') // 使用一些小工具
var webpack = require('webpack')
var config = require('../config') // 同样的使用了 config/index.js
var merge = require('webpack-merge') // 使用 webpack 配置合并插件
var baseWebpackConfig = require('./webpack.base.conf') // 加载 webpack.base.conf
/* 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 将 Hol-reload 相对路径添加到 webpack.base.conf 的 对应 entry 前
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

/* 将我们 webpack.dev.conf.js 的配置和 webpack.base.conf.js 的配置合并 */
module.exports = merge(baseWebpackConfig, {
    module: {
        // 使用 styleLoaders
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            // extract: true
        })
        // rules: utils.styleLoaders({
        //   sourceMap: config.build.productionSourceMap,
        //   extract: true
        // })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#source-map',
    plugins: [
        /* definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串 */
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        
        // new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),

        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})
