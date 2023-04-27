const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const taskContainerElement = document.querySelector(".tasks");
const tasks = [
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
        const taskElement = document.createElement("li");
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
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
