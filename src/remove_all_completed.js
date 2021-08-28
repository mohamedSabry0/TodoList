import storage from './store.js';

const clearAllCompleted = () => {
  let list = storage.get();
  list = list.filter((task) => !task.completed);
  storage.setList(list);
};

export default clearAllCompleted;
