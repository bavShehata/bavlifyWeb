// TODO: Error Messages for form
// TODO: Finish slider and customize it
// TODO: Fix images
// TODO: Check the halloween theme
// TODO: Add new themes (Valentine)
// TODO: change border color of input on focus and confirmation
// TODO: Feedback to user in case of wrong input or invalid
// TODO: Redirection when an email is sent? Why though?

// validating contact input
const reg = {
  name: /^[a-z-_ ]{1,20}$/i,
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
  message: /^[\w\s\-()+]{1,1000}$/,
};

const validate = (field, regEx) => {
  if (regEx == undefined) regEx = reg.name;
  if (regEx.test(field.value)) {
    field.style.borderColor = "green";
  } else {
    field.style.borderColor = "red";
  }
  if (field.name == "email") {
    Mailcheck.run({
      email: field.value,
      suggested: function (suggestion) {
        console.log(`Do you mean ${suggestion.full}?`);
        field.style.borderColor = "red";
      },
      empty: function () {
        console.log(`You are all set!`);
        field.style.borderColor = "green";
      },
    });
  }
};
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validate(input, reg[input.name]);
  });
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
