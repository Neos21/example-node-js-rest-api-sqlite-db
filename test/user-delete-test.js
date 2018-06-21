const testBase = require('./test-base');

const postData = {};

const options = {
  path: '/api/users/1',
  method: 'DELETE'
};

testBase(postData, options);
