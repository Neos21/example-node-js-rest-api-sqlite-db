const testBase = require('./test-base');

const postData = {};

const options = {
  path: '/api/users/1',  // ID を指定する
  method: 'GET'
};

testBase(postData, options);
