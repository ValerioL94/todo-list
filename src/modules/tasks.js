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

    const test1 = new Task("Buy healthy food", "Stop eating snacks and pre-packaged stuff, cook your own meals and buy fresh vegetables ", "2024-01-28", "High", "Eat healthy");
    const test2 = new Task("Drink more water", "Drink more water, 3 liters of water each day may seem a lot but it's not!", "2024-01-25", "Low", "Stay hydrated");
    const test3 = new Task("Start training", "The hardest part is making a habit of it, you just need to get the ball rolling", "2024-01-22", "Medium", "Training");
    const test4 = new Task("Have some fun", "Study hard, party hard. Studying and/or working is as important as having fun.", "2024-01-20", "Medium", "Have fun");

    function test() {
        pushTask(test1, 0);
        pushTask(test2, 1);
        pushTask(test3, 2);
        pushTask(test4, 3);
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
        getIndex,
        test,
    }
})()

export default tasks