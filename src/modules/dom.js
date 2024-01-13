import projects from "./projects";

const dom = (() => {
    const newProjects = document.getElementById("newProjects");
    function initPage() {
        const arrowBtn = document.getElementById("arrow");
        arrowBtn.addEventListener("click", () => {
            hideSidebar();
            flipArrow();
        });
        function hideSidebar() {
            const main = document.querySelector("main");
            if (main.className == "") {
                main.className = "hide-sidebar";
            } else {
                main.className = "";
            }
        }
        function flipArrow() {
            if (arrowBtn.className == "down") {
                arrowBtn.className = "right";
            } else {
                arrowBtn.className = "down";
            }
        }

        const nav = document.querySelector("nav");
        nav.addEventListener("click", (event) => {
            const tab = event.target.closest(".tab");
            const selectedEL = document.querySelector(".selected");
            if (!tab) return;
            if (selectedEL) selectedEL.classList.remove("selected");
            tab.classList.add("selected");
        })

        const dialog = document.getElementById("dialog");
        const dialogTitle = document.getElementById("dialogTitle");
        const newProjectBtn = document.getElementById("newProjectBtn");
        const projectTitle = document.getElementById("projectTitle");
        const projectConfirm = document.getElementById("projectConfirm");
        const projectCancel = document.getElementById("projectCancel");

        let currentProject;
        let currentH3;

        newProjectBtn.addEventListener("click", () => {
            modalType("add");
            dialog.showModal();
        })
        newProjects.addEventListener("click", (event) => {
            const button = event.target.closest("button");
            currentH3 = event.target.closest(".project.tab").querySelector("h3");
            currentProject = event.target.closest(".project.tab");
            if (!button) return;
            if (button.className === "editProject") {
                modalType("edit");
            } else if (button.className === "deleteProject") {
                modalType("delete");
            }
            projectTitle.value = currentH3.textContent;
            dialog.showModal();
        })

        projectTitle.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                projectConfirm.click();
            }
        })

        projectConfirm.addEventListener("click", () => {
            if (projectConfirm.className === "addBtn") {
                createProject();
            }
            else if (projectConfirm.className === "editBtn") {
                editProject();
            }
            else if (projectConfirm.className === "deleteBtn") {
                deleteProject();
            }
        });
        projectCancel.addEventListener("click", () => {
            dialog.close();
            projectTitle.value = "";
        });

        function createProject() {
            const title = projectTitle.value;
            if (title === "") alert("Please enter a title");
            else if (projects.projectsList.some(element => element.title === title)) {
                alert("Project already exists!");
            } else {
                projects.createProject(title);
                displayProject(title);
                dialog.close();
                projectTitle.value = "";
            }
        };
        function editProject() {
            const newTitle = projectTitle.value;
            const oldTitle = currentH3.textContent;
            if (newTitle === "") alert("Please enter new title");
            else if (projects.projectsList.some(element => element.title === newTitle)) {
                alert("Project already exists!");
            } else {
                projects.editProject(newTitle, oldTitle);
                dialog.close();
                projectTitle.value = "";
                currentH3.textContent = newTitle;
            }
        }
        function deleteProject() {
            const title = projectTitle.value;
            projects.deleteProject(title);
            currentProject.remove();
            dialog.close();
            projectTitle.value = "";
        }

        function modalType(value) {
            switch (value) {
                case "add":
                    dialogTitle.textContent = "New Project";
                    projectTitle.disabled = false;
                    projectConfirm.className = "addBtn";
                    projectConfirm.textContent = "Add";
                    break;
                case "edit":
                    dialogTitle.textContent = "Edit Project";
                    projectTitle.disabled = false;
                    projectConfirm.className = "editBtn";
                    projectConfirm.textContent = "Edit";
                    break;
                case "delete":
                    dialogTitle.textContent = "Delete Project";
                    projectTitle.disabled = true;
                    projectConfirm.className = "deleteBtn";
                    projectConfirm.textContent = "Delete";
                    break;
            }
        }
    }

    function displayProjectsList() {
        projects.projectsList.forEach(el => displayProject(el.title));
    }

    function displayProject(title) {
        const project = document.createElement("div");
        project.setAttribute("class", "project tab");
        project.setAttribute("tabindex", "0");
        const projectH3 = document.createElement("h3");
        projectH3.textContent = `${title}`;
        const btnWrapper = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.setAttribute("class", "editProject");
        const editImg = document.createElement("img");
        editImg.src = "images/edit.png";
        editImg.alt = "pen and paper icon";
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.setAttribute("class", "deleteProject");
        const deleteImg = document.createElement("img");
        deleteImg.src = "images/delete.png";
        deleteImg.alt = "trash bin icon"

        newProjects.appendChild(project);
        project.append(projectH3, btnWrapper);
        btnWrapper.append(editBtn, deleteBtn);
        editBtn.appendChild(editImg);
        deleteBtn.appendChild(deleteImg);
    }
    return {
        initPage,
        displayProject,
        displayProjectsList,
    }
})()

export default dom;