const person = { name: 'jack William', age: 17, job: 'facebook', gfName: 'Ema', address: 'kusu Kat', phone: '0171711223'};
// console.log(person.gfName);

const { phone, gfName, address } = person;

const complexObject = {
     name: 'abc',
     info:{
        address: 'kola bagan',
        leader: 'tiger leader'
    }
}
const {leader} = complexObject.info;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName, phone);

const friends = ['sakb khan', 'amir khan', 'salman khan', 'sharuk khan'];
const [chotoFriend, ...restFriend] = friends;
console.log(restFriend);