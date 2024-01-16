import projects from "./projects";

const tasks = (() => {

    class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.completed = false;
        }
    }
    function createTask(title, description, dueDate, priority, projectTitle) {
        let task = new Task(title, description, dueDate, priority);
        let index = projects.projectsList.findIndex(el => el.title === projectTitle)
        pushTask(index, task);
    }
    function pushTask(index, task) {
        projects.projectsList[index].tasks.push(task);
    }
    function editTask(title, description, dueDate, priority, projectTitle) {
        deleteTask(projectTitle);
        createTask(title, description, dueDate, priority, projectTitle);
    }
    function deleteTask(projectTitle) {
        let index = projects.projectsList.findIndex(el => el.title === projectTitle);
        projects.projectsList[index].tasks.length = 0;
    }
    return {
        createTask,
        editTask,
        deleteTask,
    }
})()

export default tasks