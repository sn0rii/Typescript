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
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`;
    const LabelElement: HTMLLabelElement = document.createElement("label");
    LabelElement.innerText = task.name;
    LabelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(LabelElement);
    taskElement.appendChild(checkboxElement);

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
