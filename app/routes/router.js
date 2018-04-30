const express = require('express');

// ルータをモジュールとして作成する
const router = express.Router();

// デバッグ用 : マウント・パスを指定していないので全てのアクセスで実行させる
router.use((req, res, next) => {
  console.log(`${req.url} [${req.method}] : ${JSON.stringify(req.body)}`);
  
  // 処理を続行させる
  next();
});

// API 別にルータを設定する
router.use('/users', require('./users-router'));

module.exports = router;
