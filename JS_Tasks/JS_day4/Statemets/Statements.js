
// forEach Examples

// Example 1 : Logs a line for each element in an array
const logArrayElements = (element, index) => {
  console.log(`a[${index}] = ${element}`);
};
[2, 5, , 9].forEach(logArrayElements);


// Example 2 : Updates an object's properties from each entry in the array
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}
const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);              // Number of array elements
console.log(obj.sum);                // Sum of all elements


// Example 3 : Flatten array elements
const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } else {
        result.push(item);
      }
    });
    return result;
  };
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  console.log(flatten(nested)); 
  
/////////////////////////////////////////////////////////////////////////////////////////

// While Loop Examples

// Example 1 : 
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"]
let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index++;
}


// Example 2 : Print car names (innerHTML)
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
let i = 0;
while (i < cars.length) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text;


/////////////////////////////////////////////////////////////////////////////////////////

// Do While Loop Examples

// Example 1 : Print from 1 to 5
let result = '';
let x = 0;
do {
  x = x + 1;
  result = result + x;
} while (x < 5);
console.log(result);


// Example 2 : Print from 1 to 5 with spaces between
let result1 = "";
let z = 0;
do {
  z += 1;
  result1 += `${z} `;
} while (z > 0 && z < 5);
console.log(result1);


// Example 3 : Print from 0 to 4 (innerHTML)
let text1 = "";
let y = 0;
do {
  text1 += y + "<br>";
  y++;
}
while (y < 5);
document.getElementById("demo").innerHTML = text1;
