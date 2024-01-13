const projects = (() => {
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }
    const test1 = new Project("test1");
    const test2 = new Project("test2");
    const test3 = new Project("test3");

    const projectsList = [test1, test2, test3];


    function createProject(title) {
        let project = new Project(title);
        projectsList.push(project);
    }
    function editProject(newTitle, oldTitle) {
        let index = projectsList.findIndex(el => el.title === oldTitle);
        projectsList[index].title = newTitle;
    }
    function deleteProject(title) {
        let index = projectsList.findIndex(el => el.title === title);
        projectsList.splice(index, 1);
    }

    return {
        projectsList,
        createProject,
        editProject,
        deleteProject,
    }
})()

export default projects;