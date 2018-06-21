const http = require('http');

/**
 * HTTP 通信テスト関数
 * 
 * @param {object} postDataObj 送信するデータ
 * @param {object} requestOptions オプション : path と method を指定する
 */
module.exports = (postDataObj, requestOptions) => {
  // 文字列化する
  const postData = JSON.stringify(postDataObj);
  // オプション情報をマージする
  const options = Object.assign({
    host: 'localhost',
    port: 3000,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, requestOptions);
  
  const req = http.request(options, (res) => {
    console.log(`Status  : ${res.statusCode}`);
    console.log(`Headers : ${JSON.stringify(res.headers)}`);
    
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`Body    : ${chunk}`);
    });
  });
  
  req.on('error', (error) => {
    console.log(`Problem With Request : ${error.message}`);
  });
  
  req.write(postData);
  req.end();
};
