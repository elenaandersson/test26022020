
// This section delete the books from the list when
// the user clicks on the delete button
//Selects the ul
const list = document.querySelector("#book-list ul");
//add evt to ul
list.addEventListener("click", function(e){
  //check if user clicked a deletebutton
  if(e.target.className === "delete"){
    //if the button is clicked its going to remove the li-parent
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


//Adds books
// selects the form
const addForm = document.querySelector("#add-book");
//Selects "LÄgg till"-button
const addBtn = document.querySelector(".add-button");
addBtn.addEventListener("click", function (e){
  e.preventDefault();


    //create element for the book
    // get the value from input and store in a const
    const value = addForm.querySelector('input[type="text"]').value;
    if (value.length > 0){
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    // add content
    bookName.textContent = value;
    deleteBtn.textContent = "Ta bort";

    // add class
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
     }
});
