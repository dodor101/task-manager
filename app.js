const btnTask = document.querySelector('.btn-task');
// this class is to create objects of task
class Task {
  constructor(task, isComplete = false) {
    this.task = task;
    this.isComplete = isComplete;
  }
}

// This function takes in task and checks input value
function createTask(task) {
  if (task !== '') {
    const newTask = new Task(task);
    return newTask;
  }
  alert('You Must Enter Task');
}
// Store tasks in localStorage
const addTaskToLocalStorage = (task) => {
  const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  existingTasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(existingTasks));
};

// display each task to the page
const displayTasks = () => {
  const tasksEl = document.getElementById('tasks');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const task = tasks.map((value, index) => {
    return `<li>${value.task}

              <span
                ><button ${value.isComplete}>complete</button> <span><button ${index}>Delete</button></span>
              </span>

            </li>`;
  });
  tasksEl.insertAdjacentHTML('beforeend', task.join(''));
};

// Event for adding task
btnTask.addEventListener('click', () => {
  const taskInput = document.querySelector('#task');

  const task = createTask(taskInput.value);

  addTaskToLocalStorage(task);
});

displayTasks();
