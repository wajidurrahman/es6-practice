// variable System:-

function doubleIt(num){
    return num * 2;
}
const result0 = doubleIt(5);
console.log(result0);


const doubleIt = function myFun(num){
    return num * 2;
}
const result1 = doubleIt(5);
console.log(result1);


// 1Line Array Function 3system pera: es6

const doubleIt = num => num * 2;
const result2 = doubleIt(50);
console.log(result2);


const add = (x, y) => x + y;
const result3 = add(50, 70);
console.log(result3);


const give5 = () => 5;
const result4 = give5();
console.log(result4);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result5 = doMath(7, 5);
console.log(result5);