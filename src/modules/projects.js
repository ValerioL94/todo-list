const projects = (() => {
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }
    const test1 = new Project("Test1");


    const projectsList = [test1];

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