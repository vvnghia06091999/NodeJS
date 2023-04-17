//cho mãng tử 1-> N duyệt mảng nếu chia hết cho 3 in ra A chia hết cho 5 in ra B chia hết cho 15 in ra AB viết trong 2 if
const array = [3, 5, 15, 20 , 30, 40, 45, 50 ,70, 90];
const A = [];
const B = [];
const AB = [];


array.map(value => {
    if(value%3 == 0){
        A.push(value);
    }
    if(value%5 == 0){
        B.push(value);
    }
});

console.log(A);
console.log(B);
console.log([...new Set(A)].filter(item => B.includes(item)));