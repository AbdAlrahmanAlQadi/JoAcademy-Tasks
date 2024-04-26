
// Main Concipt

let idElement = document.getElementById("my-div");
let TagElement = document.getElementsByTagName("p");
let classElement = document.getElementsByClassName("my-span");
let queryElement = document.querySelector(".my-span");
let queryAllElement = document.querySelectorAll(".my-span");

console.log(idElement);
console.log(TagElement[1]);
console.log(classElement[1]);
console.log(queryElement);
console.log(queryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);



// Example 1 : 

let myElm = document.querySelector(".js")

console.log(myElm.innerHTML);
console.log(myElm.textContent);

myElm.innerHTML = "Text From <span>Main.js</span> File";       // Span as a HTML element
myElm.textContent = "Text From <span>Main.js</span> File";     // Span as a text content

document.images[0].src = "http://Google.com";   // Change image source
document.images[0].alt = "alternate";           // Change image alt
document.images[0].title = "Picture";           // Add title
document.images[0].id = "picture";              // Add ID
document.images[0].className = "img";           // Add class

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "twitter");


// Example 2 :
document.getElementById("demo").innerHTML = "Date : " + Date(); 


// Example 3 :
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


  // Example 4 :
  function myFun() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }


  // Example 5 :
    //Internal JS


  // Example 6 :
    //Internal JS


  // Example 7 :
  function myMove() {
      let id = null;
      const elem = document.getElementById("animate");   
      let pos = 0;
      clearInterval(id);
      id = setInterval(frame, 5);
      function frame() {
          if (pos == 350) {
              clearInterval(id);
            } else {
                pos++; 
                elem.style.top = pos + "px"; 
                elem.style.left = pos + "px"; 
            }
        }
    }
    
    
    // Example 8 :  
    function changeText(id) {
        id.innerHTML = "Ooops!";
    }
    
    
    // Example 9 :
    function displayDate() {
        document.getElementById("demo").innerHTML = Date();
    }


    // Example 10 :
    function mOver(obj) {
        obj.innerHTML = "Thank You"
      }
      function mOut(obj) {
        obj.innerHTML = "Mouse Over Me"
      }


    // Example 11 :
    function mDown(obj) {
        obj.style.backgroundColor = "#1ec5e5";
        obj.innerHTML = "Release Me";
      }
      function mUp(obj) {
        obj.style.backgroundColor="#D94A38";
        obj.innerHTML="Thank You";
      }