import storage from './store.js';

const changeStatus = (task) => {
  const taskIndex = task.index;
  task.completed = !task.completed;
  storage.set(task, taskIndex);
};

export default changeStatus;
