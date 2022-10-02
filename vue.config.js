const BUILD_MODE = process.env.BUILD_MODE || 'docs' // 自定义打包模式
const path = require("path");
// const components = require('./build/compontents.json');
const components = require("./build/build")

const baseConfig = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    config.resolve
    .alias
    .set("@", path.join(__dirname, "./examples"))
    .set("@packages", path.join(__dirname, './packages'))
      
  },
  // css: {
  //   extract: false,
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       data: `@import "public/css/ui.scss";`
  //     }
  //   },
  // }
}

const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },

  publicPath: './',
  outputDir: 'docs',
  ...baseConfig
}

const buildConfig = {
  configureWebpack: {
    entry: components,
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      library: "MnytVueLib",
    },
  },
  externals: ['vue'],
  outputDir: 'lib',
  productionSourceMap: false,
  ...baseConfig
}

module.exports = BUILD_MODE === 'docs' ? devConfig : buildConfig;