const path = require('path');
      
module.exports = {
  // 進入點
  entry: './src/index.js',
  // 輸出點
  output: {
    // 路徑
    path: path.resolve(__dirname, 'dist'),
    // 檔案名稱
    filename: 'bundle.js',
  },
};