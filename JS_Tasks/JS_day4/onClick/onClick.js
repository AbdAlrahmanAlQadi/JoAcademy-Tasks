
// onClick Examples

// Example 1 : Arrow function, onLoad && onClick Example
let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload =  () => two.focus();

one.onblur = () =>  document.links[0].click();


// Example 2 : Alert message (Inline Event Handlers)
const clickMe = () => {
    alert('Hello')
  }


// Example 3 : Change the text color
function myFun() {
    document.getElementById("col").style.color = "red";
}


// Example 4 : Click to copy text from one input field to another
function myFunction() {
    document.getElementById("Field2").value = document.getElementById("Field1").value;
  }


//  Example 5 : Click any where in this window to change the background color
window.onclick = bgCol;

function bgCol() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "pink";
}


