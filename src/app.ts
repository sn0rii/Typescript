const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");

interface Task {
  name: string;
  done: boolean;
  category?: "general" | "work" | "gym" | "hobby";
}

const categories: string[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  {
    name: "Wyrzuceniue smieci",
    done: false,
    category: "hobby",
  },
  {
    name: "Pojsc na silownie",
    done: true,
    category: "gym",
  },
  {
    name: "Nakramic koty",
    done: false,
    category: "work",
  },
];

const render = () => {
  taskContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
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

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ name: taskNameInputElement.value, done: false });
  render();
});

addTask({ name: "Zrobic klate", category: "gym", done: false });
render();
