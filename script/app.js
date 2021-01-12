//Show and Hide the navigation on smaller screens
const showNav = () => {
  const links = document.querySelectorAll("nav li");
  const icon = document.querySelector("header .icon");
  console.log("obj");
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
  console.log(-bounding.top);
  if (elem.id == "contact") {
    console.log(elem);
    console.log(bounding.top);
    console.log(bounding.bottom);
  }
  return -bounding.top >= -100 && -bounding.top <= bounding.height - 100;
};
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", function (event) {
  console.log(sections);
  sections.forEach((section) => {
    if (
      document.body.scrollTop ==
      document.body.scrollHeight - document.body.clientHeight
    ) {
      console.log("YAAAAAAAAAAAAAAAY");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .parentElement.classList.remove("active");
      document
        .querySelector(`a[href="#contact"]`)
        .parentElement.classList.add("active");
    } else if (isInViewport(section)) {
      console.log("lmao");
      var active = document.querySelector(`a[href="#${section.id}"]`)
        .parentElement;
      active.classList.add("active");
    } else {
      var inactive = document.querySelector(`a[href="#${section.id}"]`)
        .parentElement;
      inactive.classList.remove("active");
      console.log(section.id);
    }
  });
});
//pop-up menu for services definitions
// adding a hover after each list item
const definitionsWindow = document.querySelector("#services #definitions");
const serviceCards = document.querySelectorAll("#services .card");
var bodyScrollbar = document.querySelector("#services").style.overflow;
var serviceLIArray = [
  "semanticDef",
  "langaugesDef",
  "browserDef",
  "userDef",
  "responsiveDef",
  "SEODef",
];
var test = 0;
serviceCards.forEach((serviceCard) => {
  var i = 0;
  var serviceLIs = serviceCard.querySelectorAll("ul li");
  serviceLIs.forEach((serviceLI) => {
    if (
      !(
        serviceLI.classList.contains("flat-price") ||
        serviceLI.classList.contains("none") ||
        serviceLI.classList.contains("pay")
      )
    ) {
      var clickedDefinition = document.querySelector(`#${serviceLIArray[i]}`);
      i++;
      serviceLI.innerHTML += ` <i class="far fa-question-circle"></i>`;
      serviceLI.querySelector("i").style.cursor = "pointer";
      serviceLI.querySelector("i").addEventListener("click", () => {
        definitionsWindow.style.display = "inline-block";
        bodyScrollbar = "hidden";
        clickedDefinition.style.display = "inline-block";
        //closing the window
        //close button
        const closeBtn = clickedDefinition.querySelector(".btn");
        closeBtn.addEventListener("click", () => {
          definitionsWindow.querySelector(".container").scrollTop = 0;
          clickedDefinition.style.display = "none";
          definitionsWindow.style.display = "none";
          bodyScrollbar = "auto";
        });
        //clicking outside

        definitionsWindow.addEventListener("click", function () {
          if (
            !definitionsWindow
              .querySelector(".container")
              .contains(event.target)
          ) {
            definitionsWindow.querySelector(".container").scrollTop = 0;
            clickedDefinition.style.display = "none";
            definitionsWindow.style.display = "none";
            bodyScrollbar = "auto";
          }
        });
      });
    }
  });
});
//Showing the hosting importance window
const hostingLink = document.querySelector(".hosting");
const hostingDef = document.querySelector("#hostingDef");
hostingLink.addEventListener("click", () => {
  definitionsWindow.style.display = "inline-block";
  bodyScrollbar = "hidden";
  hostingDef.style.display = "inline-block";
  //closing the window
  //close button
  const closeBtn = hostingDef.querySelector(".btn");
  closeBtn.addEventListener("click", () => {
    definitionsWindow.querySelector(".container").scrollTop = 0;
    hostingDef.style.display = "none";
    definitionsWindow.style.display = "none";
    bodyScrollbar = "auto";
  });
  //clicking outside

  definitionsWindow.addEventListener("click", function () {
    if (!definitionsWindow.querySelector(".container").contains(event.target)) {
      definitionsWindow.querySelector(".container").scrollTop = 0;
      hostingDef.style.display = "none";
      definitionsWindow.style.display = "none";
      bodyScrollbar = "auto";
    }
  });
});
// Toggle custom Services
const customServicesScreen = document.querySelector("#customServices");
const customServicesHideBtn = document.querySelector("#showPackages");
const customServicesShowBtn = document.querySelector("#showCustomServices");
const crossScreen = document.querySelector(".cross");
const scaleAnimation = document.querySelector(".scale");
//Hide custom Services
customServicesHideBtn.addEventListener("click", () => {
  customServicesScreen.style.display = "none";
  crossScreen.style.display = "none";
  customServicesShowBtn.style.display = "inline-block";
  serviceCards.forEach((card) => {
    card.style.opacity = "1";
  });
});
//Show custom Services
customServicesShowBtn.addEventListener("click", () => {
  customServicesScreen.style.display = "flex";
  crossScreen.style.display = "block";
  customServicesShowBtn.style.display = "none";
  serviceCards.forEach((card) => {
    card.style.opacity = ".4";
  });
});
//themes
//Halloween

// Include CSS file
function removeCSS() {
  var head = document.getElementsByTagName("head")[0];
  var style = document.createElement("link");
  style.href = "/themes/halloween/style/halloween.css";
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
    style.href = "/themes/halloween/style/halloween.css";
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
