const http = require('http');

// 送信するデータ : Stringify で文字列化しておく
const postData = JSON.stringify({
  'name': '山下 達郎',
  'age': 65
});

const options = {
  host: 'localhost',
  port: 3000,
  path: '/api/users/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
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
