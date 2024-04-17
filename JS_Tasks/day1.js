

// Positive & Negative Example
let num = 100
if (num > 0) {
  console.log(`${num} is a Positive Number`)
}
else if (num <0) {
    console.log(`${num} is a Negative Number`)
} 
else {
    console.log(`The value = ${num}`)
}


// True & False Example
  let x = 100
  if (x !='10') {
    console.log(false)
  }
  else {
    console.log(true)
  }


// If Example 
let price = 100
let discount = false
let dis_value = 30
let country = "Jordan"

if (discount === true) {
    price -= dis_value
} 
else if (country === "Jordan"){
    price -= dis_value + 20
}
else {
    price -= 10
}
console.log(price)



// Nested If Example 
let price1 = 100
let discount1 = false
let dis_value1 = 30
let country1 = "Jordan"
let student1 = true

if (discount1 === true) {
    price1 -= dis_value1
} 
else if (country1 === "Jordan"){
    if (student1 === true) {
    price1 -= dis_value1 + 30
    }
    else {
        price1 -= dis_value1 + 10
    }
}
else {
    price1 -= 10
}
console.log(price1)



// Includes Example
const name = 'wes';
if ('awesome'.includes(name)) {
  console.log('SUPER COOL NAME');
}


// Includes Function Example
function nameIsAwesome(name) {
    return 'awesome'.includes(name);
  }
  if (nameIsAwesome('wes')) {
    console.log('COOL NAME');
  }


// Replace Function Example
  function slugify(sentence, lowercase) {
    let slug  = sentence.replace(/\s/g, '-');
    if (lowercase) {
      return slug.toLowerCase();
    }
    return slug;
  }
  console.log(slugify("Jo Academy"));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Switch Example
let day = 0
switch (day) {
    case 0:
      console.log("Saturday")

    case 1:
      console.log("Sunday")

    case 2:
      console.log("Monday")

    case 3:
      console.log("Tuesday")

      default:
        console.log("Unknown Day")
}



// Switch with Break Example "With Multible Cases"
let day1 = 3
switch (day1) {
    case 0:
      console.log("Saturday")
      break

    case 1:
      console.log("Sunday")
      break

    case 2:
      console.log("Monday")
      break

    case 3:
    case 4:
      console.log("Tuesday Or Thursday")
      break

      default:
        console.log("Unknown Day")
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ternary Operator Examples

let theGender = "Male"
let theName = "Ahmad"
let theAge = 30
// Defult Syntax
theGender === "Male" ? console.log("Mr") : console.log("Mrs")

// Inside Variable
let result = theGender === "Female" ? "Mr" : "Mrs"
console.log(result)

// Inside the Output Command
document.write(theGender === "Male" ? "Mr" : "Mrs")

// Inside the Output Command "With Template literals(Template String)"
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`)

// More Than One Condision
theAge < 20                                     // Condision 1             
    ? console.log(20)                           // True Of Condision 1            
    : theAge > 20 && theAge <= 60               // Condision 2
    ? console.log("20 TO 60")                   // True Of Condision 2
    : theAge > 60                               // Condision 3
    ? console.log("Larger Than 60")             // True Of Condision 3
    : console.log("Unknown")                    // False Of All Condisions (The last Else)













