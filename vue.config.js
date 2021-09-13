// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx'] // 加入ts 和 tsx
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          'border-radius-base': '2px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '^/img|tinymce|avatar|logo|css/': {
        target: 'http://localhost:8000'
      },
      '~*form-view.css': {
        target: 'http://localhost:8000'
      },

      '^/graphql': {
        target: 'http://58.144.142.162:8880',
        pathRewrite: {
          '^/graphql': '/syaringan-gateway'
        }
      },

      '^/oa|dxhr|pm/graphql': {
        target: 'http://58.144.142.162:8880',
        pathRewrite: {
          '^/oa|dxhr|pm/graphql': '/syaringan-gateway'
        }
      },

      '^/api/': {
        target: 'http://58.144.142.162:8880',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}
