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
