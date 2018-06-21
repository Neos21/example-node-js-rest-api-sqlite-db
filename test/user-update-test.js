const testBase = require('./test-base');

const postData = {
  'id': 1,  // SQL 構築時に参照する ID 情報はコチラ
  'name': '角松 敏生',
  'age': 57
};

const options = {
  path: '/api/users/1',  // ID を指定する
  method: 'PUT'
};

testBase(postData, options);
