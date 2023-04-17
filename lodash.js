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

newArray = oldArray.splice(0, 2, 1 ,2);
console.log(oldArray);
console.log(newArray);

newArray = oldArray.slice(-1);
console.log(oldArray);
console.log(newArray);

const friends = [
    { name: 'John', age: 22 },
    { name: 'Peter', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Martha', age: 19 },
]

const friendsNames = Array.from(friends, ({name}) => name);
const friendsNames1 = friends.map(friend => {
    return friend.name;
})
console.log(friendsNames);
console.log(friendsNames1);

const fruits = ['banana', 'apple', 'orange', 'watermelon'];
const fruitsObj = { ...fruits };
console.log(fruitsObj);

const asss = new Array(10).fill('1');
console.log(asss);

const mixedArr = [0, 'blue', '', NaN, 9, true, undefined, 'white', false];
const trueArr = mixedArr.filter(Boolean);
console.log(trueArr);

const randomColor = oldArray[(Math.floor(Math.random() * (oldArray.length)))]
console.log(randomColor);

const sum = oldArray.reduce((total , num) => (total + num));
console.log(sum);