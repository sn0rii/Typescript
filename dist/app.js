// <li>
// <label for="task-1">Wyrzucić smieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić smieci" />
// </li>
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
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
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
