//
//  Object Destructuring
//

//const person = {
//  name: 'Kevin',
//  age: 25,
//  location: {
//      city: 'Muenster',
//      temp: 15
//  }
//};
//
//const { name: firstName = 'Anonymous', age } = person;
//
//console.log(`${firstName} is ${age}`)
//
//const { city, temp: temperature } = person.location;
//
//console.log(`It´s ${temperature} in ${city}`)


//const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//       // name: 'Penguin'
//    }
//};
//
//const { name: publisherName = 'Self-Published' } = book.publisher;
//
//console.log(`${publisherName}`)

//
// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York', zip] = address;

console.log(`You are in ${city} ${state}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`)




