let moment = require('moment');

// let date = new Date();
// let months = ['Jan', 'Feb'];
//
// console.log(date.getMonth());

// let date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('h:mm a'));

// let createdAt = 1234;

let someTimestamp = moment().valueOf();
console.log(someTimestamp);
let date = moment(1234);

console.log(date.format('h:mm a'));
