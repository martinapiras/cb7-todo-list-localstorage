import { darkModeBtnEl, darkModeImgEl } from "./script.js";

export const createListItem = (todos) => {
  const listItemEl = document.createElement("li");
  listItemEl.className = "todo";
  listItemEl.textContent = todos.todo;
  listItemEl.id = todos.id;
  // const deleteBtnEl = document.createElement("span");
  // deleteBtnEl.className = "deleteTodo";
  // deleteBtnEl.textContent = "x";

  if (todos.completed) {
    listItemEl.classList.add("completed");
  }

  // listItemEl.appendChild(deleteBtnEl);

  return listItemEl;
};

export const createNewTodoForm = () => {
  const addTodoEl = document.createElement("form");
  const labelEl = document.createElement("label");
  const inputEl = document.createElement("input");
  const submitEl = document.createElement("input");

  addTodoEl.className = "addTodo";
  labelEl.className = "newTodoLabel";
  labelEl.setAttribute("for", "newTodo");
  labelEl.textContent = "Add something else:";
  inputEl.className = "newTodo";
  inputEl.setAttribute("type", "text");
  inputEl.required = true;
  inputEl.setAttribute("minlength", "3");
  submitEl.className = "newTodoSubmit";
  submitEl.setAttribute("type", "submit");
  submitEl.setAttribute("value", "Add to list");

  addTodoEl.append(labelEl, inputEl, submitEl);

  darkModeBtnEl.addEventListener("click", () => {
    addTodoEl.classList.toggle("darkMode-active");
    labelEl.classList.toggle("darkMode-active");
    inputEl.classList.toggle("darkMode-active");
    submitEl.classList.toggle("darkMode-active");
  });

  return document.body.appendChild(addTodoEl);
};

export const addNewTodo = (e) => {
  const listItemEl = document.createElement("li");
  listItemEl.className = "todo";
  listItemEl.textContent = e.target[0].value;
  listItemEl.id = Date.now();
  // const deleteBtnEl = document.createElement("span");
  // deleteBtnEl.className = "deleteTodo";
  // deleteBtnEl.textContent = "x";

  if (darkModeImgEl.classList.contains("darkMode-active")) {
    listItemEl.classList.toggle("darkMode-active");
  }

  // listItemEl.appendChild(deleteBtnEl);

  listItemEl.addEventListener("click", (e) => {
    e.target.classList.toggle("completed");
  });

  return listItemEl;
};
