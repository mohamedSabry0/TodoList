const storage = (() => {
  const mockList = [
    {
      description: 'task 4',
      completed: true,
      index: 4,
    },
    {
      description: 'task 2',
      completed: false,
      index: 2,
    },
    {
      description: 'task 3',
      completed: false,
      index: 3,
    },
  ];

  const get = () => JSON.parse(localStorage.getItem('list')) || mockList;

  const set = (task = null, oldIndex = -1) => {
    const checkList = () => {
      let list = get();
      if (task) {
        list = list.map((item) => (item.index === oldIndex ? task : item));
      }
      return list;
    };
    localStorage.setItem('list', JSON.stringify(checkList()));
  };

  const init = () => {
    set();
  };

  const clearAll = () => {
    localStorage.clear();
  };
  return {
    set,
    get,
    init,
    clearAll,
  };
})();

export default storage;
