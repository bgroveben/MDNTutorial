var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySource = myImage.getAttribute('src');
  if (mySource === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}
