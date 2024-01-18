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

    function createTask(title, description, dueDate, priority, projectIndex) {
        let task = new Task(title, description, dueDate, priority);
        pushTask(projectIndex, task);
    }
    function pushTask(index, task) {
        projects.projectsList[index].tasks.push(task);
    }
    function editTask(title, description, dueDate, priority, projectTitle) {
        deleteTask(projectTitle);
        createTask(title, description, dueDate, priority, projectTitle);
    }
    function deleteTask(task, project) {
        let projectIndex = projects.getIndex(project);
        let taskIndex = getIndex(projectIndex, task);
        projects.projectsList[projectIndex].tasks.splice(taskIndex, 1);
    }

    function taskCompleted(task, project) {
        let projectIndex = projects.getIndex(project);
        let taskIndex = getIndex(projectIndex, task);
        if (projects.projectsList[projectIndex].tasks[taskIndex].completed === false) {
            projects.projectsList[projectIndex].tasks[taskIndex].completed = true;
        } else {
            projects.projectsList[projectIndex].tasks[taskIndex].completed = false;
        }
        console.log(projects.projectsList[projectIndex].tasks[taskIndex]);
    }
    function getIndex(projectIndex, title) {
        let taskIndex = projects.projectsList[projectIndex].tasks.findIndex(el => el.title === title);
        return taskIndex;
    }

    return {
        createTask,
        editTask,
        deleteTask,
        taskCompleted,
    }
})()

export default tasks