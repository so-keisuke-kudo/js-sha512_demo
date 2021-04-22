module.exports = {
  mode: "development",
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 18080
  },

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `${__dirname}/src/app.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "app.js"
  }
};
