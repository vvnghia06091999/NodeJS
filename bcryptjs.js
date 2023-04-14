const bcryptjs = require('bcryptjs');

const salt = bcryptjs.genSaltSync(10);
console.log(salt);
const hash = bcryptjs.hashSync('Ahihi', salt);
console.log(hash);
const check = bcryptjs.compareSync('Ahihia', hash);
if(check){
    console.log('OK');
}else{
    console.log('!!!');
}