const country = { name:'Bangladesh', area:'147570', pepole:'18 b', countryCode:'0088', divitions:['Dhaka', 'Sylhet', 'Khulna', 'Borishal', 'Rajshahi', 'Rongpur', 'Moymoshing']};
const convert = country.pepole;
console.log(convert);


const person = { name: 'jack William', age: 17, job: 'facebook', gfName: 'Ema', address: 'kusu Kat', phone: '0171711223'};
// console.log(person.gfName);
const { phone, gfName, address, salary} = person;
console.log(phone, gfName, address, salary);

const complexObject = {
     name: 'abc',
     info:{
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}
const {leader} = complexObject.info;

const friends = ['sakb khan', 'amir khan', 'salman khan', 'sharuk khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF);