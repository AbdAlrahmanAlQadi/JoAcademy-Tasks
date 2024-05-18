console.log("Here is : ", "array");

/*
1
Correct the syntax error
 [1, 7, 9, 45]

 ["Str","alex","moh"]

 ['the','fox', 'over', 'lazy', 'dog']

*/

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

The answer ==> the index of "Tomato" is 0 (fruits[0])
               the index of "Banana" is 1 (fruits[1])
*/

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let arr1 = ["Shawerma", "Burger", "Mansaf", "Pizza", "Apple"];
let arr2 = ["Badminton", "FootBall", "Swimming"];
let arr3 = ["Focus", "Wrath Of Man", "Saw", "Rambo"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(array) {
  array = ["t", "u", "g", "x"];
  return array[0];
}
console.log(firstOfArray());

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(array) {
  array = ["t", "u", "g", "x", "g"];
  return array[array.length - 1];
}
console.log(lastOfArray());

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array1 = [0, 5, 7, 9]; // => [1,3,4,6,8,9,10]

array1.shift();
array1.shift();
array1.shift();
array1.unshift(1, 3, 4, 6, 8);
array1.push(10);
console.log(array1);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [];

array2.unshift(5, 9, -7, 3.5);
console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(x) {
  if (x.length % 2 === 0) {
    return x[x.length / 2 - 1] + " and " + x[x.length / 2];
  } else {
    return x[Math.floor(x.length / 2)];
  }
}
console.log(middleOfArray([1, 4, 5, 9]));
console.log(middleOfArray(["t", "u", "x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = ["cat", "ele", "bird"];
animals[0] = "zebra";
animals[1] = "elephant";
animals.pop();
console.log(animals);

var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(array, index) {
  return array[index];
}
console.log(indexOfArray([1, 2, 3, 8, 9], 3));
console.log(indexOfArray([1, 2, 3, 8, 9], 4));
console.log(indexOfArray([1, 2, 3, 8, 9], 1));
console.log(indexOfArray([1, 2, 3, 8, 9], 5));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(array) {
  return array.slice(0, array.length - 1);
}
console.log(arrayExceptLast([1, 2, 3, 8, 9]));
console.log(arrayExceptLast([1, 2, 3, 8]));
console.log(arrayExceptLast([1, 2, 3]));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(array, index) {
  array.push(index);
  return array;
}
console.log(addToEnd([1, 2, 3, 8, 9], 55));
console.log(addToEnd([1, 2, 3, 8], 44));
console.log(addToEnd([1, 2, 3], 33));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// For loop
function sumArray1(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray1([1, 2, 3, 8, 9]));
console.log(sumArray1([1, 2, 3, 8]));
console.log(sumArray1([1, 2, 3]));

// While loop
function sumArray2(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}
console.log(sumArray2([1, 2, 3, 8, 9]));
console.log(sumArray2([1, 2, 3, 8]));
console.log(sumArray2([1, 2, 3]));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// For loop
function minInArray1(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log(minInArray1([1, 2, 3, 8, 9]));
console.log(minInArray1([0, -5, 5, 6]));
console.log(minInArray1([55, 11, 22, 65]));

// While loop
function minInArray2(array) {
  let min = array[0];
  let i = 0;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return min;
}
console.log(minInArray1([1, 2, 3, 8, 9]));
console.log(minInArray1([0, -5, 5, 6]));
console.log(minInArray1([55, 11, 22, 65]));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function removeFromArray1(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === index) {
      array.splice(i, 1);
    }
  }
  return array;
}
console.log(removeFromArray1([1, 2, 3, 8, 9], 8));
console.log(removeFromArray1([1, 2, 3, 8, 9], 3));
console.log(removeFromArray1([1, 2, 3, 8, 9], 1));

// While loop
function removeFromArray2(array, index) {
  let i = 0;
  while (i < array.length) {
    if (array[i] === index) {
      array.splice(i, 1);
    }
    i++;
  }
  return array;
}
console.log(removeFromArray1([1, 2, 3, 8, 9], 8));
console.log(removeFromArray1([1, 2, 3, 8, 9], 3));
console.log(removeFromArray1([1, 2, 3, 8, 9], 1));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function oddArray1(array) {
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  return odd;
}
console.log(oddArray1([1, 2, 3, 8, 9]));
console.log(oddArray1([55, 47, 44, 62]));
console.log(oddArray1([28, 887, 68, 63]));

// while loop
function oddArray2(array) {
  let odd = [];
  let i = 0;
  while (i < array.length) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
    i++;
  }
  return odd;
}
console.log(oddArray2([1, 2, 3, 8, 9]));
console.log(oddArray2([55, 47, 44, 62]));
console.log(oddArray2([28, 887, 68, 63]));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function aveArray1(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(aveArray1([1, 2, 3, 8, 9]));
console.log(aveArray1([5, 4, 2, 1]));
console.log(aveArray1([1, 1, 1]));

// while loop
function aveArray2(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum / array.length;
}
console.log(aveArray2([1, 2, 3, 8, 9]));
console.log(aveArray2([5, 4, 2, 1]));
console.log(aveArray2([1, 1, 1]));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function shorterInArray1(array) {
  let short = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < short.length) {
      short = array[i];
    }
  }
  return short;
}
console.log(
  shorterInArray1(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);
console.log(shorterInArray1(["ax", "r", "mad", "rashe", "emad", "hla"]));

// while loop
function shorterInArray2(array) {
  let short = array[0];
  let i = 0;
  while (i < array.length) {
    if (array[i].length < short.length) {
      short = array[i];
    }
    i++;
  }
  return short;
}
console.log(
  shorterInArray2(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);
console.log(shorterInArray2(["ax", "r", "mad", "rashe", "emad", "hla"]));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function repeatChar1(string, char) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }
  return counter;
}
console.log(repeatChar1("alex mercer madrasa rashed2 emad hala", "a"));

// while loop
function repeatChar2(string, char) {
  let counter = 0;
  let i = 0;
  while (i < string.length) {
    if (string[i] === char) {
      counter++;
    }
    i++;
  }
  return counter;
}
console.log(repeatChar2("alex mercer madrasa rashed2 emad hala", "a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// for loop
function evenIndexOddLength1(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0 && i % 2 === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(
  evenIndexOddLength1(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);
console.log(evenIndexOddLength1(["d", "c", "b", "a"]));

// while loop
function evenIndexOddLength2(array) {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    if (array[i].length % 2 !== 0 && i % 2 === 0) {
      newArr.push(array[i]);
    }
    i++;
  }
  return newArr;
}
console.log(
  evenIndexOddLength2(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"])
);
console.log(evenIndexOddLength2(["d", "c", "b", "a"]));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function powerElementIndex1(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(Math.pow(array[i], i));
  }
  return newArr;
}
console.log(powerElementIndex1([44, 5, 4, 3, 2, 10]));
console.log(powerElementIndex1([100, 1, 11, 6, 1, 1]));

// while loop
function powerElementIndex2(array) {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    newArr.push(array[i] ** i);
    i++;
  }
  return newArr;
}
console.log(powerElementIndex2([44, 5, 4, 3, 2, 10]));
console.log(powerElementIndex2([100, 1, 11, 6, 1, 1]));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function evenNumberEvenIndex1(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && i % 2 === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(evenNumberEvenIndex1([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));
console.log(evenNumberEvenIndex1([56, 225, 78, 13, 12, 45, 51, 56, 14]));

// while loop
function evenNumberEvenIndex2(array) {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 0 && i % 2 === 0) {
      newArr.push(array[i]);
    }
    i++;
  }
  return newArr;
}
console.log(evenNumberEvenIndex2([5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1]));
console.log(evenNumberEvenIndex2([56, 225, 78, 13, 12, 45, 51, 56, 14]));
