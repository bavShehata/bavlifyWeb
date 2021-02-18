// TODO: Sanitize input
// TODO: Error Messages for form
// TODO: Finish slider and customize it
// TODO: Fix images
// TODO: Check the halloween theme
// TODO: Add new themes (Valentine)
// TODO: Design a new logo
// TODO: minimize fonts

//Scroll to the top
const scrollBtn = document.querySelector("#scrollTop");
window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y > 400) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.cursor = "pointer";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.cursor = "default";
  }
});
scrollBtn.addEventListener("click", (btn) => {
  btn.preventDefault();
  if (scrollBtn.style.opacity == "1") {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
});

//themes

// Include CSS file
const theme = ["halloween"];
const themeIndex = 0;
function removeCSS() {
  var head = document.getElementsByTagName("head")[themeIndex];
  var style = document.createElement("link");
  style.href = `/themes/${theme[themeIndex]}/css/${theme[themeIndex]}.css`;
  style.type = "text/css";
  style.rel = "stylesheet";
  head.append(style);
}
const themeBtn = document.querySelector("#theme");

themeBtn.addEventListener("click", () => {
  if (themeBtn.innerHTML == `${theme[themeIndex]}!`) {
    var head = document.getElementsByTagName("head")[themeIndex];
    var style = document.createElement("link");
    var logo = document.querySelector("#logo");
    style.href = `/assets/themes/${theme[themeIndex]}/css/${theme[themeIndex]}.css`;
    style.type = "text/css";
    style.rel = "stylesheet";
    style.id = `${theme[themeIndex]}`;
    head.append(style);
    themeBtn.innerHTML = "Normal!";
  } else {
    document.querySelector(`#${theme[themeIndex]}`).remove();
    themeBtn.innerHTML = `${theme[themeIndex]}!`;
  }
});

// // Portfolio slideshow
var slideIndex = 0;
var slides = document.querySelectorAll(".mySlides");
const maxNum = slides.length;
showSlide(slideIndex);
// Next/previous controls
function plusSlides(n) {
  window.clearTimeout(isBrowsing);
  showSlide((slideIndex += n));
}

function showSlide(n) {
  // Cycle from 0 to number of slides
  n = Math.abs(n % maxNum);
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.pointerEvents = "none";
  }
  slides[n].style.pointerEvents = "initial";
  slides[n].style.display = "block";

  // Auto browse every 4 seconds
  isBrowsing = setTimeout(function () {
    showSlide((slideIndex += 1));
  }, 4000);
}
