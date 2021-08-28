import sortByIndex from './helpers.js';
import changeStatus from './complete_action.js';
import storage from './store.js';
import editListeners from './edit.js';

const UI = (() => {
  let createTaskCard;
  const populateList = (list, removeFn) => {
    const ul = document.querySelector('.tasks-container');
    ul.innerHTML = '';
    list.sort(sortByIndex);
    list.forEach((task) => {
      const li = document.createElement('li');

      createTaskCard(task, removeFn).forEach((el) => li.appendChild(el));
      li.className = 'd-flex p-2 border-bottom';
      ul.appendChild(li);
    });
    editListeners(UI, removeFn);
  };

  createTaskCard = (task, removeFn) => {
    const taskText = document.createElement('p');
    taskText.textContent = task.description;
    const completedCheck = document.createElement('input');
    completedCheck.type = 'checkbox';
    completedCheck.checked = task.completed;
    taskText.className = task.completed
      ? 'task-text m-0 px-2 flex-grow text-start completed'
      : 'task-text m-0 flex-grow text-start px-2';
    completedCheck.className = 'completed-input';
    completedCheck.addEventListener('change', () => {
      changeStatus(task);
      populateList(storage.get(), removeFn);
    });
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn', 'me-2');
    deleteBtn.addEventListener('click', () => {
      removeFn(task);
    });
    return [completedCheck, taskText, deleteBtn];
  };

  return {
    populateList,
  };
})();

export default UI;
