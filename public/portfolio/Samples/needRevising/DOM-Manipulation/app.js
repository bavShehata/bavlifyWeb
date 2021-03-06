// delete a book
const list = document.querySelector("#book-list ul");
list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.closest("li");
    list.removeChild(li);
  }
});

//add a book
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //Recieving the value
  const input = addForm.querySelector('input[type="text"]');
  const value = input.value;
  //My method
  const newLi = list.querySelector("li").cloneNode(true);
  newLi.querySelector(".name").innerHTML = value;
  list.appendChild(newLi);
  input.value = "";
  // Net Ninja method
  // //Creating elements
  // const li = document.createElement("li");
  // const bookTitle = document.createElement("span");
  // const deleteBtn = document.createElement("span");
  //
  // //elements content
  // bookTitle.textContent = value;
  // deleteBtn.textContent = "delete";
  //
  // //attaching classes
  // bookTitle.classList.add("name");
  // deleteBtn.classList.add("delete");
  //
  // //Appending elements
  // li.appendChild(bookTitle);
  // li.appendChild(deleteBtn);
  // list.appendChild(li);
  // input.value = "";
});

//search a book
const searchInput = document.forms["search-books"].querySelector("input");
searchInput.addEventListener("keyup", (e) => {
  const term = searchInput.value.toLowerCase();
  const titles = list.querySelectorAll(".name");
  titles.forEach((title) => {
    if (title.textContent.toLowerCase().indexOf(term) != -1) {
      title.parentElement.style.display = "block";
    } else {
      title.parentElement.style.display = "none";
    }
  });
});
