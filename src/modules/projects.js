import dom from "./dom";

const projects = (() => {
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    }
    const projectsList = [];
    function createProject(title) {
        let project = new Project(title);
        projectsList.push(project);
        dom.displayProject(project);
    }
    function editProject(newTitle, oldTitle) {
        let index = projectsList.findIndex(el => el.title === oldTitle);
        projectsList[index].title = newTitle;
    }
    function deleteProject(project) {
        let index = projectsList.findIndex(el => el.title === project);
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