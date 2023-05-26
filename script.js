import { addNewTodo, createListItem, createNewTodoForm } from "./fn.js";

export let todoList = JSON.parse(localStorage.getItem("userTodoList")) || [
  {
    id: 1,
    todo: "Make my bed",
    completed: false,
  },
  {
    id: 2,
    todo: "Walk the dog",
    completed: false,
  },
  {
    id: 3,
    todo: "Call my mom",
    completed: false,
  },
  {
    id: 4,
    todo: "Feed the cat",
    completed: false,
  },
  {
    id: 5,
    todo: "Go for a run",
    completed: false,
  },
  {
    id: 6,
    todo: "Buy my favorite author's new book",
    completed: false,
  },
];
// localStorage.setItem("userTodoList", JSON.stringify(todoList));

const listWrapperEl = document.createElement("div");
const listEl = document.createElement("ul");
export const darkModeBtnEl = document.querySelector(".darkMode");
export const darkModeImgEl = document.querySelector(".darkMode-icon");
const titleEl = document.querySelector("h1");

listWrapperEl.className = "listWrapper";
listEl.className = "list";

listWrapperEl.appendChild(listEl);
document.body.appendChild(listWrapperEl);

/////////////////////////////////////

todoList.forEach((todo) => listEl.append(createListItem(todo)));

const allTodos = document.querySelectorAll(".todo");

allTodos.forEach((todo) => {
  const deleteBtnEl = document.createElement("span");
  deleteBtnEl.className = "deleteTodo";
  deleteBtnEl.textContent = "x";

  listEl.insertBefore(deleteBtnEl, todo);

  if (darkModeImgEl.classList.contains("darkMode-active")) {
    deleteBtnEl.classList.toggle("darkMode-active");
  }

  todo.addEventListener("click", (e) => {
    todoList.forEach((item) => {
      if (item.id === parseInt(e.target.id)) {
        item.completed = !item.completed;
        e.target.classList.toggle("completed");
        localStorage.setItem("userTodoList", JSON.stringify(todoList));
      }
    });
  });
});

const deleteBtnEls = document.querySelectorAll(".deleteTodo");

deleteBtnEls.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    todoList = todoList.filter(
      (item) => item.id !== parseInt(e.target.nextSibling.id)
    );

    listEl.removeChild(e.target.nextSibling);
    listEl.removeChild(e.target);
    localStorage.setItem("userTodoList", JSON.stringify(todoList));
  })
);

// APPENDS NEW TO-DO FORM
createNewTodoForm();
export const todoFormEl = document.querySelector(".addTodo");

// ADDS A NEW TO-DO
todoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  listEl.append(addNewTodo(e));

  const allTodos = document.querySelectorAll(".todo");

  todoList.push({
    id: Date.now(),
    todo: e.target[0].value,
    completed: false,
  });

  localStorage.setItem("userTodoList", JSON.stringify(todoList));

  e.target[0].value = "";
});

// TOGGLES LIGHT/DARK MODE
darkModeBtnEl.addEventListener("click", () => {
  const allTodos = document.querySelectorAll(".todo");
  allTodos.forEach((todo) => todo.classList.toggle("darkMode-active"));
  document.body.classList.toggle("darkMode-active");
  titleEl.classList.toggle("darkMode-active");
  darkModeImgEl.classList.toggle("darkMode-active");
  listWrapperEl.classList.toggle("darkMode-active");
  deleteBtnEls.forEach((btn) => btn.classList.toggle("darkMode-active"));
});
