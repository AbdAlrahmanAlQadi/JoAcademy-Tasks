
// onClick Examples

// Example 1 : Load an image
const image = document.getElementById("image");
image.onload = () => {
  document.body.innerHTML += "<div>Image loaded!</div>";
};
function reload() {
  image.src = "JoAcademy.jpg";
}


// Example 2 : When you refresh the page, the alert message appears
function fun() {  
    alert("Hello Guys!, Welcome to Joacademy");  
 } 




