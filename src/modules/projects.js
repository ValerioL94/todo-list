import dom from "./dom";

const projects = (() => {
    class Project {
        constructor(title, id) {
            this.title = title;
            this.tasks = [];
            this.id = id;
        }
    }
    const projectsList = [];

    function createProject(title) {
        let id = projectsList.length;
        let project = new Project(title, id);
        projectsList.push(project);
        dom.displayProject(project);
    }
    function editProject(title, index) {
        projectsList[index].title = title;
    }
    function deleteProject(index) {
        projectsList.splice(index, 1);
        assignId();
    }
    function assignId() {
        projectsList.forEach((el, i) => {
            el.id = i;
        })
    }

    return {
        projectsList,
        createProject,
        editProject,
        deleteProject,
        assignId,
    }
})()

export default projects;