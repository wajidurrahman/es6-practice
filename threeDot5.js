const ages = [12, 14, 16, 13, 17];
const year = [15, 16, 12];
const allAges1 = ages.concat(year);
console.log(allAges1);


const roll = [12, 14, 16, 13, 17];
const date = [15, 16, 12];
const ages1 = [25, 26, 22];
// const allAges  = roll.concat(date).concat([5]).concat(ages1);
const allAges2 = [...roll, ...date, 5, ...ages1];
console.log(allAges2);


const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);


// Quiz Ans:-
// const nums = [2, 5, 1, 7, 8, 33, 29];
// const largest = Math.max(...nums);
// console.log(largest);