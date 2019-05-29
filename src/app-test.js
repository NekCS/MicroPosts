// commonJS module syntax
// const person = require('./mymodule1');

// ES2015 module
//import { person, sayHello } from './mymodule2';
// import * as mod from './mymodule2';
import greeting from './mymodule2';
//console.log(mod.sayHello());

//const greeting = 'Hello World';
console.log(greeting);

/* 
const getData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts'); 
*/