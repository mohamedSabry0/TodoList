import sortByIndex from './helpers.js';
import changeStatus from './complete_action.js';

const UI = (() => {
  const createTask = (task) => {
    const taskText = document.createElement('p');
    taskText.classList.add('m-0', 'px-2');
    taskText.textContent = task.description;
    const completedCheck = document.createElement('input');
    completedCheck.type = 'checkbox';
    completedCheck.checked = task.completed;
    completedCheck.className = 'completed-input';
    completedCheck.addEventListener('change', () => {
      changeStatus(task);
    });
    const dragBtn = document.createElement('div');
    dragBtn.classList.add('drag-btn', 'ms-auto', 'me-2');
    return [completedCheck, taskText, dragBtn];
  };

  const populateList = (list) => {
    const ul = document.querySelector('.tasks-container');
    list.sort(sortByIndex);
    list.forEach((task) => {
      const li = document.createElement('li');

      createTask(task).forEach((el) => li.appendChild(el));
      li.className = 'd-flex p-2 border-bottom';
      ul.appendChild(li);
    });
  };

  return {
    populateList,
  };
})();

export default UI;
