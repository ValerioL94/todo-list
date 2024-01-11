import projects from "./projects";

const dom = (() => {
    const content = document.getElementById("content");
    const newProjects = document.getElementById("new-projects");

    function displayProject(project) {
        const newProject = document.createElement("div");
        newProject.setAttribute("class", "project tab");
        newProject.setAttribute("data-id", `${project.id}`);
        newProject.setAttribute("tabindex", "0");
        newProject.addEventListener("click", () => {
            const selectedEl = document.querySelector(".selected");
            if (selectedEl) selectedEl.classList.remove("selected");
            newProject.classList.add("selected");
        });
        const projectH3 = document.createElement("h3");
        projectH3.textContent = `${project.title}`;
        const btnWrapper = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.setAttribute("class", "editProject");
        // editBtn.addEventListener("click", () => {

        // })
        const editImg = document.createElement("img");
        editImg.src = "/images/edit.png";
        editImg.alt = "pen and paper icon";
        editImg.title = "Edit";
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.setAttribute("class", "deleteProject");
        deleteBtn.addEventListener("click", () => {
            if (confirm("Delete this project?") === true) {
                projects.deleteProject(`${project.id}`);
                newProject.remove();
            }
        })
        const deleteImg = document.createElement("img");
        deleteImg.src = "/images/delete.png";
        deleteImg.alt = "trash bin icon"
        deleteImg.title = "Delete";

        newProjects.appendChild(newProject);
        newProject.append(projectH3, btnWrapper);
        btnWrapper.append(editBtn, deleteBtn);
        editBtn.appendChild(editImg);
        deleteBtn.appendChild(deleteImg);

    }

    function displayProjectsList() {
        for (let i = 0; i < projects.projectsList.length; i++) {
            displayProject(projects.projectsList[i]);
        }
    }
    return {
        displayProject,
        displayProjectsList,
    }
})()

export default dom;
