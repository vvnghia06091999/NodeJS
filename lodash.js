const _ = require('lodash');
let oldArray = [10, 3, 4, 6, 2, 4, 7, 0];

let newArray;

newArray = _.join(oldArray, '~');
console.log(oldArray);
console.log(newArray);

newArray = _.chunk(oldArray, 3);
console.log(oldArray);
console.log(newArray);

newArray = _.findIndex(oldArray, a => {return a==2});
console.log(oldArray);
console.log(newArray);

newArray = _.drop(oldArray, 2);
console.log(oldArray);
console.log(newArray);

newArray = oldArray.splice()
console.log(oldArray);
console.log(newArray);