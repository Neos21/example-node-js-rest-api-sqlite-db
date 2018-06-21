const testBase = require('./test-base');

const postData = {
  'name': '山下 達郎',
  'age': 65
};

const options = {
  path: '/api/users/',
  method: 'POST'
};

testBase(postData, options);
