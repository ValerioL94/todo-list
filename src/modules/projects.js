const projects = (() => {
    let projectsList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }

    function pushProject(title) {
        const project = new Project(title);
        projectsList.push(project);
    }
    function editProject(title, index) {
        projectsList[index].title = title;
    }

    function removeProject(index) {
        projectsList.splice(index, 1);
    }

    return {
        projectsList,
        pushProject,
        editProject,
        removeProject,
    }
})()

export default projects;