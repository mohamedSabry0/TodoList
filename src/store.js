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

  const setList = (list) => {
    localStorage.setItem('list', JSON.stringify(list));
  };

  return {
    set,
    get,
    init,
    setList,
  };
})();

export default storage;
