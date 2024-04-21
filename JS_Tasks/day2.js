// Functions

// Simple Examples Of Functions

console.log("//////////////////////// Example 1 ////////////////////////")
function sayHello(userName, age) {
  if (age < 20) {
    console.log(`Sorry ${userName}, You Are not authorized to enter the site`)
  } else {
    console.log(`Hello ${userName}, Your Age Is ${age}`)
  }
}
sayHello("KKK", 20)
sayHello("AAA", 10)
sayHello("QQQ", 30)


console.log("//////////////////////// Example 2 ////////////////////////")
// Calculate Function

function calc1(p1 , p2) {
  console.log(p1 * p2)
}
calc1(10, 20)
calc1(10, 10)
calc1(50, 10)

console.log("//////////////////////// Example 3 ////////////////////////")
// Calculate Function And The Output Inside The Variable

function calculateBill() {
    const total = 100 * 1.13;
    console.log(total);
  }
  calculateBill();
 

console.log("//////////////////////// Example 4 ////////////////////////")
// Advanced Example Of Functions, Includes : 1) For Loop && If Statement
//                                          2) default  Parameter 

function generateYears (start, end , exclude = 2022) {
    for (let i = start ; i <= end ; i++) {
        if (i === exclude) {
            continue                        // continue means skip this value and continue to next iteration
        }
        console.log(i)
    }
}
generateYears(2019 , 2024)


// Function Return And Use Cases

console.log("//////////////////////// Example 5 ////////////////////////")
// Calculate Function With Template literals

function calc2(num1 , num2) {
    return num1 + num2
}
let result = calc2(10 , 20)
console.log(`The Result = ${result + 100}`)


console.log("//////////////////////// Example 6 ////////////////////////")
// Interruptting Function

function generate (start , end) {
    for (let i = start ; i <= end ; i++) {
        if (i === 15) {
            return `Interruptting`
        }
        console.log(i)
    }
}
generate (10 , 20)


console.log("//////////////////////// Example 7 ////////////////////////")
// Function Object Example "Arrow Function"

function updateBrand(obj) {
    obj.brand = "Toyota"
  }
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  }
  console.log(car.brand)
  updateBrand(car)
  console.log(car.brand) 

  
console.log("//////////////////////// Example 8 ////////////////////////")
  // Nested Functions

  function outside () {
    const x = 5
    function inside (x) {
        return x * 2
    }
    return inside;
  }
  console.log(outside()(10))
  
  
  console.log("//////////////////////// Example 9 ////////////////////////")
  // Example On Map Method
  
  const array1 = [1, 4, 9, 16];
  const map1 = array1.map((x) => x * 2);
  console.log(map1);


console.log("//////////////////////// Example 10 ////////////////////////")
// Arrow Functions With Map Method

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s) {
  return s.length;
});
console.log(a2);
const a3 = a.map((s) => s.length);
console.log(a3);


console.log("//////////////////////// Example 11 ////////////////////////")
// Button && PopUp Example

console.log("Button Example")


console.log("//////////////////////// Example 12 ////////////////////////")
// Function Object Example

console.log(" The Output in The White Space")
var add=new Function("num1","num2","return num1+num2");  
document.writeln(add(2,5)); 


console.log("//////////////////////// Example 13 ////////////////////////")

function calcu() {
    const total = 100 * 1.13;
    console.log(total);
  }
  calcu();

  
