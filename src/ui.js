import sortByIndex from './helpers.js';
import changeStatus from './complete_action.js';
import storage from './store.js';

const UI = (() => {
  let createTaskCard;
  const populateList = (list) => {
    const ul = document.querySelector('.tasks-container');
    ul.innerHTML = '';
    list.sort(sortByIndex);
    list.forEach((task) => {
      const li = document.createElement('li');

      createTaskCard(task).forEach((el) => li.appendChild(el));
      li.className = 'd-flex p-2 border-bottom';
      ul.appendChild(li);
    });
  };

  createTaskCard = (task) => {
    const taskText = document.createElement('p');
    taskText.textContent = task.description;
    const completedCheck = document.createElement('input');
    completedCheck.type = 'checkbox';
    completedCheck.checked = task.completed;
    taskText.className = task.completed ? 'm-0 px-2 completed' : 'm-0 px-2';
    completedCheck.className = 'completed-input';
    completedCheck.addEventListener('change', () => {
      changeStatus(task);
      populateList(storage.get());
    });
    const dragBtn = document.createElement('div');
    dragBtn.classList.add('drag-btn', 'ms-auto', 'me-2');
    return [completedCheck, taskText, dragBtn];
  };

  return {
    populateList,
  };
})();

export default UI;
