const storage = (() => {
  const get = () => JSON.parse(localStorage.getItem('list')) || [];

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
  const getByIndex = (index) => get().filter((t) => t.index === index)[0];

  const setList = (list) => {
    localStorage.setItem('list', JSON.stringify(list));
  };

  return {
    set,
    get,
    init,
    setList,
    getByIndex,
  };
})();

export default storage;
