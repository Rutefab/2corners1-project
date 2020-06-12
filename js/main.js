/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  const state = document.querySelector(".dropdown-content").style.visibility = 'visible';
}

function myFunctionOut() {
  const state = document.querySelector(".dropdown-content").style.visibility = 'hidden';
}

function func(){
  alert('Yes');
}

const btn = document.getElementById("btn");

const dropbox = document.querySelector(".dropdown-content");

btn.addEventListener('mouseover', myFunction);

btn.addEventListener('mouseout', myFunctionOut);

dropbox.addEventListener('mouseover', myFunction);

dropbox.addEventListener('mouseout', myFunctionOut);
