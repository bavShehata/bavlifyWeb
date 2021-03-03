// TODO: Finish slider and customize it
// TODO: Fix images
// TODO: Check the halloween theme
// TODO: Add new themes (Valentine)
// TODO: Redirection when an email is sent? Why though?
// TODO: Disable scrolling when the pop up appear
// TODO: close the popup by clicking outside
// TODO: display none until contact is added successfully

// validating Email input
const reg = {
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
};
var errorPara = document.querySelector(".errorPara");
var suggestionPara = document.querySelector(".suggestionPara");
var suggestedPara = suggestionPara.querySelector(".suggested");
const validate = (field, regEx) => {
  errorPara = document.querySelector(".errorPara");
  suggestionPara = document.querySelector(".suggestionPara");
  suggestedPara = suggestionPara.querySelector(".suggested");
  Mailcheck.run({
    // If there is a suggestion
    email: field.value,
    suggested: function (suggestion) {
      // Show the suggestion and change border color
      suggestedPara.innerHTML = `${suggestion.full}?`;
      suggestionPara.style.display = "block";
      field.style.border = "4px solid #b2001f";
      errorPara.style.display = "none";
      // Clicking the suggestion solves the problem
      suggestedPara.addEventListener("click", () => {
        errorPara.style.display = "none";
        field.value = suggestion.full;
        suggestionPara.style.display = "none";
        field.style.border = "2px solid var(--tertiary-clr)";
      });
    },
    empty: function () {
      //If there are no suggestions, check the RegEx
      suggestionPara.style.display = "none";
      if (regEx.test(field.value)) {
        // If the Email is valid
        errorPara.style.display = "none";
        field.style.border = "2px solid var(--tertiary-clr;";
      } else {
        errorPara.style.display = "block";
        field.style.border = "4px solid #b2001f";
      }
    },
  });
};
const emailInput = document.querySelector(`input[type="email"]`);
emailInput.addEventListener("blur", () => {
  if (emailInput.value != "") validate(emailInput, reg.email);
  else {
    errorPara.style.display = "none";
    suggestionPara.style.display = "none";
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
