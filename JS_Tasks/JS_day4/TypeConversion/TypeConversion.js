
// Type Conversion

// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result)

result = '3' + true; 
console.log(result); 

result = '3' + undefined; 
console.log(result); 

result = '3' + null; 
console.log(result); 


// numeric string used with - , / , * results number type
let result1;

result1 = '4' - '2'; 
console.log(result1); 

result1 = '4' - 2;
console.log(result1); 

result1 = '4' * 2;
console.log(result1); 

result1 = '4' / 2;
console.log(result1); 


// non-numeric string used with - , / , * results to NaN
let result2;

result2 = 'hello' - 'world';
console.log(result2); 

result2 = '4' - 'hello';
console.log(result2); 


// if boolean is used, true is 1, false is 0
let result3;

result3 = '4' - true;
console.log(result3); 

result3 = 4 + true;
console.log(result3); 

result3 = 4 + false;
console.log(result3); 


// null is 0 when used with number
let result4;

result4 = 4 + null;
console.log(result4);  

result4 = 4 - null;
console.log(result4); 


// Convert to Number Explicitly
let result5;
// string to number
result5 = Number('324');
console.log(result5); 

result5 = Number('324e-1')  
console.log(result5); 

// boolean to number
result5 = Number(true);
console.log(result5);

result5 = Number(false);
console.log(result5); 


// Empty strings and Null values 
let result6 ;
result6 = Number(null);
console.log(result6); 

let result7 = Number(' ')
console.log(result7);  


//number to string
let result8;
result8 = String(324);
console.log(result8);  

result8 = String(2 + 4);
console.log(result8);

//other data types to string
result8 = String(null);
console.log(result8); 

result8 = String(undefined);
console.log(result8); 

result8 = String(NaN);
console.log(result8); 

result8 = String(true);
console.log(result8); 

result8 = String(false);
console.log(result8); 


// Convert to Boolean Explicitly
// undefined, null, NaN, 0, and '' converts to False
let result9;
result9 = Boolean('');
console.log(result9); 

result9 = Boolean(0);
console.log(result9); 

result9 = Boolean(undefined);
console.log(result9); 

result9 = Boolean(null);
console.log(result9); 

result9 = Boolean(NaN);
console.log(result9); 


// All other values give True
result10 = Boolean(324);
console.log(result10); 

result10 = Boolean('hello');
console.log(result10); 

result10 = Boolean(' ');
console.log(result10); 