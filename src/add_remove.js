import storage from './store.js';
import UI from './ui.js';

const addRemove = (() => {
  const descInput = document.querySelector('.task-description-input');

  const createNewTask = (desc, index) => ({
    description: desc,
    completed: false,
    index,
  });

  const updateIndex = (index, list) => list.map((item) => {
    if (item.index > index) {
      return {
        description: item.description,
        completed: item.completed,
        index: item.index - 1,
      };
    }
    return item;
  });

  const remove = (task) => {
    const list = storage.get();
    let newList = list.filter((item) => item.index !== task.index);
    newList = updateIndex(task.index, newList);
    storage.setList(newList);
    UI.populateList(newList, remove);
  };

  const add = (task, list) => {
    list.push(task);
    storage.setList(list);
    UI.populateList(list, remove);
  };

  descInput.addEventListener('keyup', (e) => {
    const list = storage.get();
    if (e.key === 'Enter' && descInput.value !== '') {
      const task = createNewTask(descInput.value, list.length + 1);
      add(task, list);
      descInput.value = '';
    }
  });

  return {
    remove,
  };
})();

export default addRemove;
