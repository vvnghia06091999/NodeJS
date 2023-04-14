console.log('Start');
setTimeout(() => {
    console.log('Timeout');
},0);
setImmediate(() => {console.log('setImmediate')});
process.nextTick(() => {
    console.log('next Tick');
});
let a = 2;
new Promise((resolve, reject) => {
    console.log('Promise');
    if(a % 2 == 0){
        resolve('resolve');
    }else{
        reject('reject');
    }
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
console.log('End');