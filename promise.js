const num =0;
const promise= new Promise(async (resole, reject) => {
    if(!num){
        reject('Not 0');
    }
    if(num%2){
        resole('%2');
    }else{
        resole('!%2');
    }
});
promise.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});