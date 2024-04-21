// Q1) Reverse a number.

function revNum(num) {
    num += "";                  // converts the number to string : 51196 => "51196"
    return num.split("")        // Split the string to Array of Character : ["5", "1", "1", "9", "6"]
    .reverse()                  // Reverse the Array elements : ["6", "9", "1", "1", "5"]   
    .join("");                  // Return the array elements in a single string : "69115"
  }
  console.log(revNum("51196"));
  
  
  
  // Q2) Check whether an input is an array or not.
  
  function isArray(theInput) {
      return Array.isArray(theInput);     // Call the method 'isArray'
    }
    console.log(isArray([100, "Ok" , 511 , 'Good']));   // The output will be True
    console.log(isArray("Hi Guys"));                    // The output will be False
    
   
  // Q3) Join all elements of the following array into a string.
  
  function arrayToString(arr) {
      arr = ["Red","Green","White","Black"]
      return arr.join(" , ");
  }
  console.log(arrayToString("arr"))
  
  
  // Q4) Sort the items of an array.
  
  function sortArray (myArr) {
      return myArr.sort();
  }
  let myArr = [1,6,4,8,-5,9,-17,30,-9];
  console.log(sortArray(myArr))
  
  
  /* Q5) iterate from 0 to 15. For each iteration, it will check if the current
   number is odd or even, and display a message to the screen. */
  
  function even_Odd (numm){
      if (numm % 2 == 0) {
          return numm + " is even";
      }
      else {
          return numm + " is odd";
      }
  }
  for (let i = 0; i <= 15 ; i++) {
      console.log(even_Odd(i))
  }
  
  
  // Q6) Capitalize the first letter of each word in a string.
  
  function capitalize(jo) {
      let words = jo.split(" ");           // To split the string to array of character
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i]              // To assigned back to itself
          .charAt(0)                       // To get the first character
          .toUpperCase() + words[i]        // To make it uppercase
          .slice(1);                       // To complete the remaining letters of the word
      }
      return words.join(" ");              // Return the array elements in a single string
  } 
  let input = "js string exercises";
  console.log(capitalize(input));