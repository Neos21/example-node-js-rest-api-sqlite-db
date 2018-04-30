const http = require('http');

// 送信するデータ : Stringify で文字列化しておく
const postData = JSON.stringify({
  'id': 2,  // SQL 構築時に参照する ID 情報はコチラ
  'name': '角松 敏生',
  'age': 57
});

const options = {
  host: 'localhost',
  port: 3000,
  path: '/api/users/2',  // ID を指定する
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)  // https://github.com/expressjs/express/issues/1749#issuecomment-24049248
  }
};

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
