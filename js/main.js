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

// Close the dropdown if the user clicks outside of it
const btn = document.getElementById("btn");

const dropbox = document.querySelector(".dropdown-content");

btn.addEventListener('mouseover', myFunction);

btn.addEventListener('mouseout', myFunctionOut);

dropbox.addEventListener('mouseover', myFunction);

dropbox.addEventListener('mouseout', myFunctionOut);

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}