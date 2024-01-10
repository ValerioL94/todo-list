import projects from "./projects";

const dom = (() => {
    const content = document.getElementById("content");
    const newProjects = document.getElementById("new-projects");

    function displayProject() {
        projects.projectsList.forEach((el, index) => {
            const project = document.createElement("div");
            project.setAttribute("class", `project${index} tab`);
            const projectH3 = document.createElement("h3");
            projectH3.textContent = `${el.title}`;
            const btnWrapper = document.createElement("div");
            const editBtn = document.createElement("button");
            editBtn.type = "button";
            const editImg = document.createElement("img");
            editImg.src = "/images/edit.png";
            editImg.alt = "pen and paper icon";
            editImg.title = "Edit";
            const deleteBtn = document.createElement("button");
            deleteBtn.type = "button";
            const deleteImg = document.createElement("img");
            deleteImg.src = "/images/delete.png";
            deleteImg.alt = "trash bin icon"
            deleteImg.title = "Delete";

            newProjects.appendChild(project);
            project.append(projectH3, btnWrapper);
            btnWrapper.append(editBtn, deleteBtn);
            editBtn.appendChild(editImg);
            deleteBtn.appendChild(deleteImg);
        })
    }
    return {
        displayProject,
    }
})()

export default dom;