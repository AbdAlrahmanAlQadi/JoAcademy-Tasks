/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */

/******* Start Your Code *********/

// Solution 1 :
let a = 10;
let b = 20;

if (a > b) {
  console.log("The Larger Number Is : " + a);
} else {
  console.log("The Larger Number Is : " + b);
}

// Solution 2 :
let a1 = 100;
let b1 = 200;
console.log("The Larger Number Is : " + (a1 > b1 ? a1 : b1));

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */

/******* Start Your Code *********/

// Solution 1 :
let num1 = 3;
let num2 = -7;
let num3 = 2;

num1 * num2 * num3 >= 0 ? alert("The Sign Is (+)") : alert("The Sign Is (-)");

// Solution 2 :
let n1 = 15;
let n2 = 32;
let n3 = 20;

let sign = "";

n1 * n2 * n3 > 0 ? (sign = "+") : (sign = "-");
alert("The Sign Is " + "(" + sign + ")");

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/

let nu1 = -16;
let nu2 = 45;
let nu3 = 10;

if (nu1 > nu2 && nu1 > nu3) {
  nu2 > nu3
    ? alert(nu1 + ", " + nu1 + ", " + nu3)
    : alert(nu1 + " , " + nu3 + ", " + nu2);
} else if (nu2 > nu1 && nu2 > nu3) {
  nu1 > nu3
    ? alert(nu2 + ", " + nu1 + ", " + nu3)
    : alert(nu2 + " , " + nu3 + ", " + nu1);
} else if (nu3 > nu1 && nu3 > nu2) {
  nu1 > nu2
    ? alert(nu3 + ", " + nu1 + ", " + nu2)
    : alert(nu3 + " , " + nu2 + ", " + nu1);
}

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

let numbers = [-20, 18, 41, 0, -50];
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  // Loop into all array elements
  if (numbers[i] > largest) {
    largest = numbers[i]; // Compare all array elements and store the result in variable "largest"
  }
}
alert("The Largest Number is : " + largest);

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/

let nr1 = 10;
let nr2 = 5;

nr1 > nr2 ? alert("Hello World") : alert("Goodbye");

/******* End Your Code ********* */
