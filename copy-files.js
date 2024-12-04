// fs-extra モジュールをインポート
const fs = require('fs-extra');

// コピー元とコピー先のパスを指定
fs.copySync('src', 'dist');

console.log('Files copied successfully!');
