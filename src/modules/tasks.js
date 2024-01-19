import projects from "./projects";

const tasks = (() => {

    class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.completed = false
        }
    }

    const test1 = new Task("taskTest1", "this is a test", "2024-01-21", "Low");
    const test2 = new Task("taskTest2", "another test", "2024-01-20", "Medium");
    const test3 = new Task("taskTest3", "one more test", "2024-01-19", "High");
    const test4 = new Task("taskTest4", "one last test", "2024-01-18", "Low");

    function test() {
        pushTask(0, test1);
        pushTask(1, test2);
        pushTask(2, test3);
        pushTask(3, test4);
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
        test,
    }
})()

export default tasks