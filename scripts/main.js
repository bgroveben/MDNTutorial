var myImage = document.querySelector('img');
// Switch between two images when the image is clicked
myImage.onclick = function() {
  var mySource = myImage.getAttribute('src');
  if (mySource === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}
// Get references to button in index.html and store them in variables
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
// Set a personalized greeting
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to the Mozilla MDN Tutorial, ' + myName;
}
// Set up the app when it first loads to store the user's name (initialization code)
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the Mozilla MDN Tutorial, ' + storedName;
}
// Set event handler that allows user to set a new name
myButton.onclick = function() {
  setUserName();
}
