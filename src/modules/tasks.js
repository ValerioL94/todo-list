import projects from "./projects";

const tasks = (() => {

    class Task {
        constructor(title, description, dueDate, priority, project) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.project = project
            this.completed = "No"
        }
    }

    function createTask(title, description, dueDate, priority, project) {
        let task = new Task(title, description, dueDate, priority, project);
        let index = projects.getIndex(project);
        pushTask(task, index);
    }
    function pushTask(task, index) {
        projects.projectsList[index].tasks.push(task);
    }
    function editTask(title, description, dueDate, priority, project, taskIndex, projectIndex) {
        let task = new Task(title, description, dueDate, priority, project);
        replaceTask(taskIndex, projectIndex, task);
    }
    function deleteTask(taskIndex, projectIndex) {
        projects.projectsList[projectIndex].tasks.splice(taskIndex, 1);
    }
    function replaceTask(taskIndex, projectIndex, task) {
        projects.projectsList[projectIndex].tasks.splice(taskIndex, 1, task);
    }

    function taskCompleted(task, project) {
        let projectIndex = projects.getIndex(project);
        let taskIndex = getIndex(projectIndex, task);
        if (projects.projectsList[projectIndex].tasks[taskIndex].completed === "No") {
            projects.projectsList[projectIndex].tasks[taskIndex].completed = "Yes";
        } else {
            projects.projectsList[projectIndex].tasks[taskIndex].completed = "No";
        }
    }
    function getIndex(projectIndex, taskTitle) {
        let index = projects.projectsList[projectIndex].tasks.findIndex(el => el.title === taskTitle);
        return index;
    }

    return {
        createTask,
        editTask,
        deleteTask,
        taskCompleted,
        getIndex
    }
})()

export default tasks