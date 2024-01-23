const projects = (() => {
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }

    let projectsList = [];
    if (localStorage.getItem('projects') === null) {
        projectsList = [
            {
                title: "Eat healthy",
                tasks: [
                    {
                        title: "Buy healthy food",
                        description: "Stop eating snacks and pre-packaged stuff, cook your own meals and buy fresh vegetables ",
                        dueDate: "2024-01-28",
                        priority: "High",
                        project: "Eat healthy",
                        completed: "No",
                    }
                ]
            },
            {
                title: "Stay hydrated",
                tasks: [
                    {
                        title: "Drink more water",
                        description: "3 liters of water each day may seem a lot but it's not!",
                        dueDate: "2024-01-25",
                        priority: "Low",
                        project: "Stay hydrated",
                        completed: "No",
                    }
                ]
            },
            {
                title: "Training",
                tasks: [
                    {
                        title: "Start training",
                        description: "The hardest part is making a habit of it, you just need to get the ball rolling",
                        dueDate: "2024-01-22",
                        priority: "Medium",
                        project: "Training",
                        completed: "No",
                    }
                ]
            },
            {
                title: "Have fun",
                tasks: [
                    {
                        title: "Do something you enjoy",
                        description: "Study hard, party hard. Studying and/or working is as important as having fun.",
                        dueDate: "2024-01-20",
                        priority: "Medium",
                        project: "Have fun",
                        completed: "No",
                    }
                ]
            }
        ]
    } else {
        const storedProjects = JSON.parse(localStorage.getItem('projects'));
        projectsList = storedProjects;
    }

    function createProject(title) {
        let project = new Project(title);
        pushProject(project);
    }
    function pushProject(project) {
        projectsList.push(project);
    }
    function editProject(newTitle, oldTitle) {
        let index = getIndex(oldTitle);
        projectsList[index].title = newTitle;
    }
    function deleteProject(title) {
        let index = getIndex(title);
        projectsList.splice(index, 1);
    }
    function getIndex(title) {
        let index = projectsList.findIndex(el => el.title === title);
        return index;
    }

    return {
        projectsList,
        createProject,
        editProject,
        deleteProject,
        getIndex,
    }
})()

export default projects;