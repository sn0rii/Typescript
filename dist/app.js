const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
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
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const LabelElement = document.createElement("label");
        LabelElement.innerText = task.name;
        LabelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
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
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false });
    render();
});
addTask({ name: "Robota od szefa", done: true });
render();
