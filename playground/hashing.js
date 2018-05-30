const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(password, salt);
console.log(salt);
console.log(hash);

let compare = bcrypt.compareSync(password, hash);
console.log(compare);

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });
//
// let data = {
//   id: 10
// };
//
// let token = jwt.sign(data, '123qwerty');
// console.log(token);
//
// let decoded = jwt.verify(token, '123qwerty');
// console.log('decoded', decoded);