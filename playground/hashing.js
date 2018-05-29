const jwt = require('jsonwebtoken');

let data = {
  id: 10
};

let token = jwt.sign(data, '123qwerty');
console.log(token);

let decoded = jwt.verify(token, '123qwerty');
console.log('decoded', decoded);