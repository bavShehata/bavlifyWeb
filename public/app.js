// TODO: Sanitize input
// TODO: Error Messages for form
// TODO: Finish slider and customize it
// TODO: Fix images
// TODO: Check the halloween theme
// TODO: Add new themes (Valentine)
// TODO: Design a new logo
// TODO: minimize fonts

//Show and Hide the navigation on smaller screens
const showNav = () => {
  const links = document.querySelectorAll("nav li");
  const icon = document.querySelector("header .icon");
  links.forEach((link) => {
    const disp = window.getComputedStyle(link).getPropertyValue("display");
    if (link.id != "ham-btn") {
      link.addEventListener("click", () => {
        links.forEach((linkA) => {
          if (linkA.id != "ham-btn") linkA.style.display = "none";
        });
      });
      if (disp == "none") {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    }
  });
};
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
//Section focus on navigation
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return -bounding.top >= -100 && -bounding.top <= bounding.height - 100;
};
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function (event) {
  sections.forEach((section) => {
    if (
      document.body.scrollTop ==
      document.body.scrollHeight - document.body.clientHeight
    ) {
      document
        .querySelector(`a[href="#${section.id}"]`)
        .parentElement.classList.remove("active");
      document
        .querySelector(`a[href="#contact"]`)
        .parentElement.classList.add("active");
    } else if (isInViewport(section)) {
      var active = document.querySelector(`a[href="#${section.id}"]`)
        .parentElement;
      active.classList.add("active");
    } else {
      var inactive = document.querySelector(`a[href="#${section.id}"]`)
        .parentElement;
      inactive.classList.remove("active");
    }
  });
});
// Hiding navBar when user stops scrolilng
const navMenu = document.querySelector("header");
var isScrolling;
// Listen for scroll events
window.addEventListener(
  "scroll",
  () => {
    navMenu.style.zIndex = "2";
    navMenu.style.opacity = "1";
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      // Run the callback
      navMenu.style.opacity = "0";
      // display is None
      setTimeout(() => {
        navMenu.style.zIndex = "-99";
      }, 1000);
    }, 1500);
  },
  false
);

// Showing navBar on hover:
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  event = event || window.event; // IE-ism
  if (event.clientY <= 100) {
    navMenu.style.zIndex = "2";
    navMenu.style.opacity = "1";
  }
  // Use event.pageX / event.pageY here
}

//themes
//Halloween

// Include CSS file
function removeCSS() {
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("link");
  style.href = "/themes/halloween/css/halloween.css";
  style.type = "text/css";
  style.rel = "stylesheet";
  head.append(style);
}
const themeBtn = document.querySelector("#theme");

themeBtn.addEventListener("click", () => {
  if (themeBtn.innerHTML == "Halloween!") {
    var head = document.getElementsByTagName("head")[0];
    var style = document.createElement("link");
    var logo = document.querySelector("#logo");
    style.href = "/themes/halloween/css/halloween.css";
    style.type = "text/css";
    style.rel = "stylesheet";
    style.id = "halloween";
    head.append(style);
    themeBtn.innerHTML = "Normal!";
    themeBtn.style.animation = "none";
    logo.classList.add("halloween-animation");
  } else {
    document.querySelector("#halloween").remove();
    themeBtn.innerHTML = "Halloween!";
    logo.classList.remove("halloween-animation");
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
// Automatic slider

// showSlides();
//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
