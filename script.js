//Today's date

let today = new Date();
let mm = String(today.getMonth() + 1).padStart(2, '0');
let dd = String(today.getDate()).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;
document.getElementsByTagName('h2')[0].textContent = today;



// This section delete the tasks from the list when
// the user clicks on the delete button
//Selects the ul
const list = document.querySelector("#task-list ul");
//add evt to ul
list.addEventListener("click", function(e){
  //check if user clicked a deletebutton
  if(e.target.className === "delete"){
    //if the button is clicked its going to remove the li-parent
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


//Adds tasks
// selects the form
const addForm = document.querySelector("#add-task");
//Selects "LÄgg till"-button
const addBtn = document.querySelector(".add-button");
addBtn.addEventListener("click", function (e){
  e.preventDefault();


    //create element for the task
    // get the value from input and store in a const
    const value = addForm.querySelector('input[type="text"]').value;
    if (value.length > 0){
    const li = document.createElement("li");
    const taskName = document.createElement("span");
    const deleteBtn = document.createElement("span");
    // add content
    taskName.textContent = value;
    deleteBtn.textContent = 'Delete';

    // add class
    taskName.classList.add("name");
    deleteBtn.classList.add("delete");

    //append to DOM
    li.appendChild(taskName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
     }
});
