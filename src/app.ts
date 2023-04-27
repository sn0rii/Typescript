// <li>
// <label for="task-1">Wyrzucić smieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić smieci" />
// </li>
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: {
  name: string;
  done: boolean;
}[] = [
  {
    name: "Wyrzuceniue smieci",
    done: false,
  },
  {
    name: "Pojsc na silownie",
    done: true,
  },
  {
    name: "Nakramic koty",
    done: false,
  },
];

const render = () => {
  taskContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task.name;
    taskContainerElement.appendChild(taskElement);
  });
};

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  render();
});

render();
