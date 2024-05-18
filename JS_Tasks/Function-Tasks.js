/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune() {
  let jobTitle = "Software Engineer";
  let location = "Jordan";
  let partnarName = "Alice";
  let kidsNumber = 4;

  return `You will be a ${jobTitle} in ${location}, and married to ${partnarName} with ${kidsNumber} children`;
}
console.log(tellFortune());

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age) {
  return `Your doggie is ${age * 7} years old in dog years!`;
}
console.log(calculateDogAge(2));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
  let maxAge = 100;
  let amount = (maxAge - age) * 365 * amountPerDay;
  return `You will need ${amount} to last you until the ripe old age of ${maxAge}`;
}
console.log(calculateSupply(70, 2));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Qadi"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
=> Solution : It should be double(X) not double(cat).
*/

/*
function double(7) {
  return 2 * 7;
}
=> Solution : It should be double() not double(7).
*/

/*
function double('7') {
  return 2 * 'x';
}
=> Solution : It should be double(x) not double('7').
              It should be return 2 * x ;
*/

/*
6
fix these functions:
function double1 (x) {
  return 2 * x ;
}

function double2 (x) {
return 2 * x;
}

function double3 (x) {
  return 2 * x;
}
*/

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num) {
  return num * num * num;
}
console.log(cube(4));

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 5));

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
  age >= 20
    ? console.log("Yes you can")
    : console.log(`Please come back after ${20 - age} years to get one`);
}
canIGetADrivingLicense(15);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
  str1.length === str2.length ? console.log("True") : console.log("False");
}
sameLength("Qadi", "Jor");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer() {
  let num1 = 5;
  let num2 = 6;
  num1 > num2 ? console.log(num1) : console.log(num2);
}
largerNubmer();

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer() {
  let num1 = 9;
  let num2 = 13;
  let num3 = 22;
  num1 < num2 && num1 < num3
    ? console.log(num1)
    : num2 < num3
    ? console.log(num2)
    : console.log(num3);
}
smallerNubmer();

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by
*/

// Solution 1 :
function shorterString(str1, str2, str3, str4, str5) {
  // let str1 = "air";
  // let str2 = "tr";
  // let str3 = "car";
  // let str4 = "github";
  // let str5 = "bye";

  if (
    str1.length < str2.length &&
    str1.length < str3.length &&
    str1.length < str4.length &&
    str1.length < str5.length
  ) {
    console.log(str1);
  } else if (
    str2.length < str3.length &&
    str2.length < str4.length &&
    str2.length < str1.length &&
    str2.length < str5.length
  ) {
    console.log(str2);
  } else if (
    str3.length < str4.length &&
    str3.length < str1.length &&
    str3.length < str2.length &&
    str3.length < str5.length
  ) {
    console.log(str3);
  } else if (
    str4.length < str3.length &&
    str4.length < str1.length &&
    str4.length < str2.length &&
    str4.length < str5.length
  ) {
    console.log(str4);
  } else {
    console.log(str5);
  }
}
shorterString("air", "tr", "car", "github", "bye");

// Solution 2 :
function shorterString1(s1, s2, s3, s4) {
  let shorter = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length < shorter.length) {
      shorter = arguments[i];
    }
  }
  return shorter;
}
console.log(shorterString1("air", "tr", "car", "github"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// Solution 1 :
function longerString(str1, str2, str3, str4) {
  // let str1 = "air";
  // let str2 = "train";
  // let str3 = "car";
  // let str4 = "github";
  if (
    str1.length > str2.length &&
    str1.length > str3.length &&
    str1.length > str4.length
  ) {
    console.log(str1);
  } else if (
    str2.length > str3.length &&
    str2.length > str4.length &&
    str2.length > str1.length
  ) {
    console.log(str2);
  } else if (
    str3.length > str4.length &&
    str3.length > str1.length &&
    str3.length > str2.length
  ) {
    console.log(str3);
  } else {
    console.log(str4);
  }
}
longerString("air", "train", "car", "github");

// Solution 2 :
function longerString1(str1, str2, str3, str4) {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
console.log(longerString1("air", "school", "car", "github"));

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/

function isEven(num1) {
  num1 % 2 === 0 ? console.log(true) : console.log(false);
}
isEven(5);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num1) {
  num1 % 2 !== 0 ? console.log(true) : console.log(false);
}
isOdd(5);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/

function positive(num1) {
  num1 > 0 ? console.log(num1) : console.log(num1 * -1);
}
positive(-9);

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName("Adam", "McCallen");

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8
*/

function average(num1, num2, num3, num4, num5) {
  console.log((num1 + num2 + num3 + num4 + num5) / 5);
}
average(5, 7, 9, 3, 5);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475
*/

function randomNumber() {
  console.log(Math.random());
}
randomNumber();

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23
*/

function randomBetweenNumbers(num1, num2) {
  console.log(Math.floor(Math.random() * (num2 - num1 + 1)) + num1);
}
randomBetweenNumbers(100, 1000);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(score) {
  if (score >= 95 && score <= 100) {
    console.log("A");
  } else if (score >= 85 && score <= 94) {
    console.log("B");
  } else if (score >= 70 && score <= 84) {
    console.log("C");
  } else if (score >= 50 && score <= 69) {
    console.log("D");
  } else if (score < 50) {
    console.log("F");
  }
}
scoreInUniversty(75);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3
*/

function counter() {
  let counter1 = 0;
  return function () {
    return counter1++;
  };
}
let x = counter();

console.log(x());
console.log(x());
console.log(x());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function counter() {
  let count = 1;
  return function () {
    return count++;
  };
}

function resetCounter() {
  let Count2 = count();
  count = counter();
  return Count2 + " and the counter reset now";
}
let count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(resetCounter());
console.log(count());
console.log(count());
console.log(resetCounter());
console.log(count());
