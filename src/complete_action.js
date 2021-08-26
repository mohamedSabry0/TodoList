const changeStatus = (task) => {
  task.completed = !task.completed;
  console.log(task);
};

export { changeStatus };
