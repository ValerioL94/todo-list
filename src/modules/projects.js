const projects = (() => {
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }
    const test1 = new Project("Test1");
    const test2 = new Project("Test2");
    const test3 = new Project("Test3");

    const projectsList = [test1, test2, test3];

    function createProject(title) {
        let project = new Project(title);
        pushProject(project);
    }
    function pushProject(project) {
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