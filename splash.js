/*
Javascript code for the scrolling text
*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Campus Shuttle", "Bookings", "Reservations"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});










/* 
javascript for the splash screen

*/

/*

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 5);
	window.location.href="booking.html";
});
*/



/*
let myAudio = new Audio();
function playAudio() {

  myAudio.src = 'sounds/carpassby.mp3';
  myAudio.autoplay = true;

 }

 function playr(){
  myAudio.playAudio();
  setInterval(nexter, 1000);

  }

  function nexter(){
  window.location.href="loginsignup.html";
  }

  */

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },10)

  //myAudio.playAudio();

//setTimeout(playr, 10);
//wait();

  window.location.href="loginsignup.html";

})

//window.location.href="loginsignup.html";