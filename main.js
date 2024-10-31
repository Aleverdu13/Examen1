import './style.css'

document.getElementsByTagName("div")[0].classList.add("container");
document.getElementsByTagName("div")[1].classList.add("search");
document.getElementsByTagName("div")[2].classList.add("li-container");
document.getElementsByTagName("div")[3].classList.add("empty");
document.getElementsByTagName("div")[4].classList.add("task-count");

document.getElementsByTagName("button")[0].classList.add("btn-add");

let input = document.getElementsByTagName("input")[0];

function newTask() {
  let ul = document.querySelector("ul");
  let task = document.createElement("li");
  ul.appendChild(task);

  let content = document.createElement("p");
  let text = document.createElement("span");
  text.textContent = input.value;
  content.appendChild(text);

  const xBtn = document.createElement("button");
  xBtn.classList.add("btn-delete");
  xBtn.textContent = "X";
  task.appendChild(content);
  task.appendChild(xBtn);

  content.addEventListener("click", () => {
    text.style.textDecoration == "none" ? text.style.textDecoration = "line-through" : text.style.textDecoration = "none";
  });

  xBtn.addEventListener("click", () => {
    ul.removeChild(task);
    counter--;
    updateTaskCounter();
    if(counter == 0) document.getElementsByTagName("p")[counter].textContent = "You have no pending tasks";
  });
}

const addBtn = document.getElementsByClassName("btn-add")[0];

let counter = 0;

addBtn.addEventListener("click", (event) => {
  if(input.value != "") {
    newTask();
    counter++;
    input.value="";
  } else {
    alert("No se pueden introducir tareas vacías");
  }
  event.preventDefault();
  updateTaskCounter();
  
  if(counter > 0) document.getElementsByTagName("p")[counter].textContent = "";
});

function updateTaskCounter() {
  const taskCountElement = document.querySelector(".task-count");
    taskCountElement.textContent = `Number of task: ${counter}`;
}
