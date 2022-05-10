import storage from './store.js';

const changeToInput = (element, parent) => {
  const text = element.textContent;

  parent.innerHTML = `
  <input type="checkbox" class="completed-input">
  <input
        type="text"
        value="${text}"
        class="task-edit m-0 flex-grow px-2"
      />
  <div class="delete-btn me-2"></div>
  `;
};

let edit;

const editListeners = (module, removeFn) => {
  const tasks = Array.from(document.querySelectorAll('.task-text'));
  tasks.forEach((element, index) => {
    element.addEventListener('click', () => {
      edit(element, index + 1, module, removeFn);
    });
  });
};

edit = (element, index, UI, removeFn) => {
  const parent = element.parentElement;
  changeToInput(element, parent);
  const editInput = parent.querySelector('.task-edit');
  editInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && editInput.value !== '') {
      const task = storage.getByIndex(index);
      task.description = editInput.value;
      storage.set(task, index);
      UI.populateList(storage.get(), removeFn);
    }
  });
};

export default editListeners;
