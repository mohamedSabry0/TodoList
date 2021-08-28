import storage from './store.js';
import UI from './ui.js';

const addRemove = () => {
  const descInput = document.querySelector('.task-description-input');
  const list = storage.get();

  const createNewTask = (desc, index) => ({
    description: desc,
    completed: false,
    index,
  });

  const add = (task, list) => {
    list.push(task);
    storage.setList(list);
    UI.populateList(list);
  };

  descInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && descInput.value !== '') {
      const task = createNewTask(descInput.value, list.length + 1);
      add(task, list);
    }
  });

  // const updateIndex = () => {};

  // const remove = (task, list) => {};
};

export default addRemove;
