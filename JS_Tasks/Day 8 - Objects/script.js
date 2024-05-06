
// Object contain single value
let person = "John Doe";
document.getElementById("demo").innerHTML = person;


// Object contain many values (With Const)
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};


document.getElementById("demo1").innerHTML =
  person1.firstName + " " + person1.lastName;


// Creates an empty object, then adds properties
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

document.getElementById("demo2").innerHTML =
  person2.firstName + " is " + person2.age + " years old.";


// Create a new object using 'new Object()'
const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 30;
person3.eyeColor = "blue";

document.getElementById("demo3").innerHTML =
  person3.firstName + " is " + person3.age + " years old.";


// Mutable object , Accessing With syntax (objectName["property"])
const person4 = {
    firstName: "John",
    lastName: "Doe",
    age:20,
    eyeColor: "blue"
  };
  const x = person4;
  x.age = 10;
  
document.getElementById("demo4").innerHTML =
  person4["firstName"] + " is " + person4["age"] + " years old.";


// Foor..let..in loop
const user = {
    name: "Qadi",
    age: 25,
    country: "Jordan"
};
let Data = '';

for (let info in user) {
    // console.log(info, ":", user[info]);
    // console.log(`The ${info} is ${user[info]}`);
    Data += `<div>The ${info} is ${user[info]} </div>`;
};
console.log(Data);
document.getElementById("demo5").innerHTML = Data;


// Add a new property to an existing object
const person6 = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
person6.nationality = "English";
document.getElementById("demo6").innerHTML =
person6.firstname + " is " + person6.nationality ;


// Delete a property from an object
const person7 = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
delete person7.age;
document.getElementById("demo7").innerHTML =
person7.firstname + " is " + person7.age + " years old.";


// Display in JSON format, with add & delete properties
const person8 = {
  name: "John",
  age: 30,
  city: "New York"
};
let txt = person8;
txt.last="Qadi";
delete txt.age;
document.getElementById("demo8").innerHTML = 
JSON.stringify(txt);


// Adding a new method to an object
const per = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
per.name = function() {
  return this.firstName + " " + this.lastName;
};

document.getElementById("demo").innerHTML =
"My father is " + per.name(); 


// Using assign() Method (with for in loop)
const per1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

const per2 = {
  age: 30,
  city: "New York"
};

const per3 = Object.assign(per1, per2); 

let finalData = '';

for (let info in per3) {
  finalData += `<div>The ${info} is ${per3[info]} </div>`;
}
document.getElementById("demo9").innerHTML = finalData;


// Using entries() Method
// Example 1
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); 

// Example 2
const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); 

// Example 3
const randomKeyOrder = { 100: "a", 2: "b", 7: "c", 1: "d" };
console.log(Object.entries(randomKeyOrder));


// Using keys() Method
// Example 1
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};
console.log(Object.keys(object1));

// Example 2
const pers = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const keys = Object.keys(pers);
document.getElementById("demo10").innerHTML = keys;

// Example 3 
const arr1 = ["a", "b", "c"];
console.log(Object.keys(arr1)); 

// Example 4
const objc = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(objc)); 

// Example 5
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj));


// Using toString() Method
const person11 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const keys1 = Object.toString(person11);
console.log(keys1);


// Using valueOf() Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();

document.getElementById("demo12").innerHTML = myArray;


// Using values() Method
const objectt = { 0: '23', 1: 'NONE', 2: 'true' };
console.log(Object.values(objectt));


// Setter Method
const person14 = {
  firstName: "John",
  lastName: "Doe",
  language: " ",
  set lang(value) {
    this.language = value;
  }
};
person14.lang = "en";
document.getElementById("demo14").innerHTML = person14.language;


// Getter Method
const person15 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
document.getElementById("demo15").innerHTML = person15.lang;
