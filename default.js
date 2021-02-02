function add(num1, num2 = 20){
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    // (jodi parameter value dawa na take)
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15);
// const total = add(15, 17);
console.log(total);

// // (Quiz Ans:)
// function createUser(name,age = 18){
//     const user = {};
//     user.name = name;   
//     user.age = age;
//     return user;
// }