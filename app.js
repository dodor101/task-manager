const btnTask = document.querySelector('.btn-task');

class Task {
  constructor(task, isComplete = false) {
    this.task = task;
    this.isComplete = isComplete;
  }
}

function createTask(task) {
  if (task !== '') {
    const newTask = new Task(task);
    return newTask;
  }
  alert('You Must Enter Task');
}

const task = createTask('Run 3 miles everyday!');

const addTaskToLocalStorage = (task) => {
  const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  existingTasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(existingTasks));
};

btnTask.addEventListener('click', () => {
  const taskInput = document.querySelector('#task');

  const task = createTask(taskInput.value);

  addTaskToLocalStorage(task);
});

console.log('duke');
