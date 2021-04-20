console.log(
  "Don't worry about that font sanitizer error, it's completely harmless\n"
);
// validating Email input
const reg = {
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
};
var errorPara = document.querySelector(".errorPara");
var suggestionPara = document.querySelector(".suggestionPara");
var suggestedPara = document.querySelector(".suggested");
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

// Portfolio slideshow
var slideIndex = 0;
var slides = document.querySelectorAll(".mySlides");
// For swiping on mobile
let portfolioContainer = document.querySelector("#portfolio .container");
let screenWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
let usedDevice;
window.onload = function () {
  // Wait for everything to load so that we can get the offsetHeight and width accurately, then run the function of slideShowing
  var desktopVidHeight, mobileVidHeight, desktopVidWidth, mobileVidWidth;
  //listen for window resize event
  window.addEventListener("resize", function (event) {
    desktopVidHeight = slides[5].querySelector("video").offsetHeight; // aspect ratio of 1.73:1
    mobileVidHeight = slides[1].querySelector("video").offsetHeight; // aspect ratio of 11:20
    desktopVidWidth = slides[5].querySelector("video").offsetWidth; // aspect ratio of 1.73:1
    mobileVidWidth = slides[1].querySelector("video").offsetWidth; // aspect ratio of 11:20
    usedDevice = getComputedStyle(
      document.querySelector("#portfolio .container")
    ).getPropertyValue("--device");
    for (let n = 0; n < 6; n++) {
      const desktopVid = slides[n].querySelector(".desktop video");
      const img = slides[n].querySelector("img");
      if (desktopVid) {
        img.style.width = mobileVidWidth;
        img.style.height = mobileVidHeight;
      } else {
        const mobileVid = slides[n].querySelector(".mobile video");
        img.style.width = desktopVidWidth;
        img.style.height = desktopVidHeight;
      }
    }
  });
  desktopVidHeight = slides[5].querySelector("video").offsetHeight; // aspect ratio of 1.73:1
  mobileVidHeight = slides[1].querySelector("video").offsetHeight; // aspect ratio of 11:20
  desktopVidWidth = slides[5].querySelector("video").offsetWidth; // aspect ratio of 1.73:1
  mobileVidWidth = slides[1].querySelector("video").offsetWidth; // aspect ratio of 11:20
  usedDevice = getComputedStyle(
    document.querySelector("#portfolio .container")
  ).getPropertyValue("--device");
  // console.log(
  //   `Desktop Video Height is ${desktopVidHeight}px vs ${
  //     slides[5].querySelector("video").videoHeight
  //   }\n`
  // );
  // console.log(
  //   `Desktop Video Width is ${desktopVidWidth}px vs ${
  //     slides[5].querySelector("video").videoWidth
  //   }\n`
  // );
  // console.log(
  //   `Mobile Video Height is ${mobileVidHeight}px vs ${
  //     slides[1].querySelector("video").videoHeight
  //   }\n`
  // );
  // console.log(
  //   `Mobile Video Width is ${mobileVidWidth}px vs ${
  //     slides[1].querySelector("video").videoWidth
  //   }\n`
  // );

  // Images have the same width and height of the videos
  for (let n = 0; n < 6; n++) {
    const desktopVid = slides[n].querySelector(".desktop video");
    const img = slides[n].querySelector("img");
    if (desktopVid) {
      img.style.width = mobileVidWidth;
      img.style.height = mobileVidHeight;
    } else {
      const mobileVid = slides[n].querySelector(".mobile video");
      img.style.width = desktopVidWidth;
      img.style.height = desktopVidHeight;
    }
  }
  // When portfolio gets swiped
  // portfolioContainer.addEventListener(
  //   "touchend",
  //   throttleFunction(() => {
  //     // Find the current image, and call it in showSlide
  //     window.clearTimeout(isBrowsing);
  //     // Wait till the css scroll snap takes effect
  //     setTimeout(() => {
  //       scrollLeft = portfolioContainer.scrollLeft;
  //       imageNumber = scrollLeft / screenWidth;
  //       showSlide(Math.round(imageNumber));
  //     }, 200);
  //   }, 300)
  // );

  // Start from the first image
  portfolioContainer.scrollLeft = 0;
  showSlide(0);
};
// Throttling function to prevent multiple swipes
let prev = 0;

const throttleFunction = (func, delay) => {
  // Previously called time of the function
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;
      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};
// Next/previous controls
function plusSlides(n) {
  window.clearTimeout(isBrowsing);
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const maxNum = slides.length;
  if (n == -1) {
    n = 5;
  }
  n = Math.abs(n % maxNum);
  slideIndex = n;
  // portfolioContainer.scroll({
  //   left: n * screenWidth,
  //   behavior: "smooth",
  // });
  // Start every video from the beginning and play it
  slides[n].querySelector("video").currentTime = 0;
  // Problems happen with these videos, so this is a manual fix
  // TODO: Find a better fix
  // if (n == 0 || n == 2) slides[n].querySelector("video").load();
  // else
  //   slides[n]
  //     .querySelector("video")
  //     .play()
  //     .catch(function (e) {
  //       console.log("Error playing video\n", e);
  //     });
  slides[n]
    .querySelector("video")
    .play()
    .catch(function (e) {
      console.log("Error playing video\n", e);
    });
  // If you are on desktop, the appear class will get toggled
  // if (usedDevice == "desktop") {
  // Cycle from 0 to number of slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("appear");
  }

  slides[n].classList.add("appear");
  // }
  // Make videos a bit slower since the vids r only 4 seconds and the slideshow is 6 seconds
  if (n!=1)
  slides[n].querySelector("video").playbackRate = 0.75;
  // Auto browse every 6 seconds
  isBrowsing = setTimeout(function () {
    showSlide(n + 1);
  }, 6000);
}

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
