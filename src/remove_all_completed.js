import storage from './store.js';

const reArrangeIndex = (list) => {
  let index = 1;
  list.forEach((element) => {
    element.index = index;
    index += 1;
  });
  return list;
};

const clearAllCompleted = () => {
  let list = storage.get();
  list = list.filter((task) => !task.completed);
  list = reArrangeIndex(list);
  storage.setList(list);
};

export default clearAllCompleted;
