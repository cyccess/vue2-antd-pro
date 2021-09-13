module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
    [
      '@vue/babel-preset-jsx',
      {
        vModel: false,
        compositionAPI: true
      }
    ]
  ],
  plugins: [['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]]
}
