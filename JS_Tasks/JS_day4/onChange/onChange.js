
// onChange Examples

// Example 1 : Convert from lowercase to uppercase
document.getElementById("userName").onchange = function() {uName()};

function uName() {
  var x = document.getElementById("userName");
  x.value = x.value.toUpperCase();
}


// Example 2 : Outputs the value of the selected option (Inline Event Handlers)
function myFun() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}

// Example 3 : Choose one option to see the result
let show = document.querySelector('#show');  
document.body.addEventListener('change', function (e) {  
    let target = e.target;  
    let display_msg;  
    switch (target.id) {  
   case 'happy':  
            display_msg = 'You are happy';  
            break;  
    case 'excited':  
            display_msg = 'You are excited';  
            break;  
     case 'sad':  
           display_msg = 'You are sad';  
           break;  
case 'angry':  
           display_msg = 'You are angry';  
           break;  
case 'none':  
           display_msg = 'none';  
           break;  
    }  
    show.textContent = display_msg;  
});  


