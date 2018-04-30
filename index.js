const express = require('express');
const bodyParser = require('body-parser');

// サーバをインスタンス化する
const app = express();

// DB を準備する
const db = require('./app/db/db');
db.init();

// ポートを指定して待ち受ける
const port = process.argv[2] || 3000;
app.listen(port, () => {
  console.log(`サーバ起動 : http://localhost:${port}/`);
});

// POST されたデータを受け取るための設定を行う
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ルータを設定する
const restApiRoot = '/api';
app.use(restApiRoot, require('./app/routes/router'));
