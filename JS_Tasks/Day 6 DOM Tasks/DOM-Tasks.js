// DOM Tasks

// Q1) Change The Text On Mouse Over
function mouseOver(mOver) {
  mOver.innerHTML = "Can I help you?";
}
function mouseOut(mOver) {
  mOver.innerHTML = "Hello world!";
}

// Q2)A) Change The Color On click
let div = document.getElementById("changeColor");
let colors = ["blue", "red", "green", "pink", "black", "orange"];
let Index = 0;
div.addEventListener("click", function () {
  div.style.backgroundColor = colors[Index]; // Set the background color to the current index color
  Index = (Index + 1) % colors.length; // To return to the first element in the array
});

// Q2)B)
let randomIndex = Math.floor(Math.random() * colors.length); // To get random color from the Array
div.style.backgroundColor = colors[randomIndex];
let colorIndex = randomIndex;
div.addEventListener("click", function () {
  colorIndex = (colorIndex + 1) % colors.length;
  div.style.backgroundColor = colors[colorIndex];
});

// Q3) Changes The Selection In The List, Display The Selected Image
let selectElement = document.getElementById("selImg");
let imageElement = document.getElementById("seldImg");
selectElement.addEventListener("change", function () {
  // To determine which option is selected
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  if (selectedOption.value !== "") {
    // If the option is selected don't = None
    imageElement.src = selectedOption.value; // Copy the value to the Image src
    imageElement.alt = selectedOption.text; // Copy the text to the Image alt
    imageElement.style.display = "flex"; // Show the image that is relative to the selected option
  } else {
    imageElement.style.display = "none"; // Don't show anything
  }
});

// Q4) Simple what-you-see-what-you-get text editor
let bold = document.getElementById("bold-checkbox");
let underline = document.getElementById("underline-checkbox");
let italic = document.getElementById("italic-checkbox");
let fontSize = document.getElementById("font-size-select");
let fontFamily = document.getElementById("font-family-select");
let textBox = document.getElementById("text-box");

bold.addEventListener("change", updateText); // Add the event to the element
underline.addEventListener("change", updateText);
italic.addEventListener("change", updateText);
fontSize.addEventListener("change", updateText);
fontFamily.addEventListener("change", updateText);

function updateText() {
  let styles = "";
  if (bold.checked) styles = styles + "font-weight: bold;"; // Give values to the elements
  if (underline.checked) styles = styles + "text-decoration: underline;";
  if (italic.checked) styles = styles + "font-style: italic;";
  let fontSize1 = fontSize.value;
  let fontFamily1 = fontFamily.value;
  // To apply the changes to the text
  textBox.style.cssText = `${styles} font-size: ${fontSize1}; font-family: ${fontFamily1};`;
}

// Q5) Password Form
document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // It ensures that the form doesn't submit automatically
    validatePasswords(); // Call the function
  });

function validatePasswords() {
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let password1Err = document.getElementById("password1Err");
  let password2Err = document.getElementById("password2Err");
  let submitButton = document.getElementById("submitButton");

  password1Err.textContent = "";
  password2Err.textContent = "";

  if (password1.length < 6) {
    password1Err.textContent = "Password must be at least 6 characters long";
  }
  if (password2.length < 6) {
    password2Err.textContent = "Password must be at least 6 characters long";
  }
  if (password1 !== password2) {
    password2Err.textContent = "Passwords do not match, Please try again";
  }
  if (
    password1.length >= 6 &&
    password2.length >= 6 &&
    password1 === password2
  ) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
}

// Q6) Content show/hide
function toggleArticle(event) {
  event.preventDefault();

  // Checks if the element that triggered the event contains the CSS class
  let showLink = event.target.classList.contains("show-link");
  // selects the element that is a child of the parent element of the clicked link
  let articleBody = event.target.parentElement.querySelector(".article-body");

  let showLinkElement = event.target.parentElement.querySelector(".show-link");
  let hideLinkElement = event.target.parentElement.querySelector(".hide-link");

  if (showLink) {
    articleBody.style.display = "block";
    showLinkElement.style.display = "none";
    hideLinkElement.style.display = "inline";
  } else {
    articleBody.style.display = "none";
    showLinkElement.style.display = "inline";
    hideLinkElement.style.display = "none";
  }
}

// Q7) Simple Playlist (A + B)
document.addEventListener("DOMContentLoaded", function () {
  // Get the add button, input field, playlist, and error message
  let addButton = document.getElementById("addButton");
  let songInput = document.getElementById("songInput");
  let playlist = document.getElementById("playlist");
  let errorMessage = document.getElementById("errorMessage");

  addButton.addEventListener("click", function () {
    addSong(songInput.value.trim());
  });
  // Function to add a song to the playlist
  function addSong(song) {
    // Check if the input field is empty
    if (song === "") {
      errorMessage.textContent = "Please enter a song!";
      errorMessage.style.display = "block";
      return;
    }
    errorMessage.style.display = "none"; // Clear any previous error message

    let songDiv = document.createElement("div"); // Create a new div element for the song

    songDiv.textContent = song; // Set the text content of the div to the song

    songDiv.classList.add("song"); // Add class "song" to the song div

    let deleteLink = document.createElement("span"); // Create a delete link for the song
    deleteLink.textContent = "❌"; // You can use any delete icon or text you prefer
    deleteLink.classList.add("delete");

    // Add click event listener to delete the song
    deleteLink.addEventListener("click", function () {
      songDiv.remove();
      checkPlaylist();
    });
    songDiv.appendChild(deleteLink);
    playlist.appendChild(songDiv);
    songInput.value = "";
    playlist.style.display = "block";
  }

  function checkPlaylist() {
    if (playlist.childElementCount === 0) {
      playlist.style.display = "none";
    }
  }
  checkPlaylist();
});

// Q8) Color Picker
document.addEventListener("DOMContentLoaded", function () {
  let colorsDiv = document.getElementById("colors");
  let selectedDiv = document.getElementById("selected");

  let colors = [
    { r: 255, g: 0, b: 0 }, 
    { r: 225, g: 7, b: 99 }, 
    { r: 122, g: 11, b: 99 }, 
    { r: 255, g: 0, b: 255 }, 
    { r: 136, g: 136, b: 136 }, 
    { r: 0, g: 0, b: 255 }, 
    { r: 65, g: 121, b: 200 }, 
    { r: 0, g: 255, b: 255 }, 
    { r: 255, g: 255, b: 0 }, 
    { r: 255, g: 136, b: 0 }, 
    { r: 0, g: 255, b: 0 }, 
    { r: 11, g: 224, b: 34 }, 
    { r: 77, g: 212, b: 144 }, 
    { r: 111, g: 121, b: 78 }, 
    { r: 202, g: 150, b: 125 }, 
  ];

  selectedDiv.textContent = "Choose color please";

  colors.forEach(function (color) {
    let colorTile = document.createElement("div");
    colorTile.className = "color-tile";
    colorTile.style.backgroundColor =
      "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";

    colorTile.addEventListener("click", function () {
      selectedDiv.textContent =
        "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
      selectedDiv.style.backgroundColor =
        "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    });
    colorsDiv.appendChild(colorTile);
  });
});
