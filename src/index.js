import _ from "lodash";
import "./style.css";

const mockList = [
  {
    description: "task 1",
    completed: true,
    index: 1,
  },
  {
    description: "task 2",
    completed: false,
    index: 2,
  },
  {
    description: "task 3",
    completed: false,
    index: 3,
  },
];
const createTask = (task) => {
  const taskText = document.createElement("p");
  taskText.classList.add("m-0");
  taskText.textContent = task.description;
  const completedCheck = document.createElement("input");
  completedCheck.type = "checkbox";
  const dragBtn = document.createElement("div");
  dragBtn.classList.add("drag-btn");
  console.log(dragBtn);
  return [taskText, completedCheck, dragBtn];
};

const populateList = (list) => {
  const ul = document.querySelector(".tasks-container");
  ul.classList.add("list-unstyled");
  list.forEach((task) => {
    const li = document.createElement("li");

    createTask(task).forEach((el) => li.appendChild(el));
    li.className = "d-flex";
    ul.appendChild(li);
  });
};

populateList(mockList);
