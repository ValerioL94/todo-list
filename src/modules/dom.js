import projects from "./projects";
import tasks from "./tasks";

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

        const projectDialog = document.getElementById("projectDialog");
        const projectForm = document.getElementById("projectForm");
        const dialogTitle = document.getElementById("dialogTitle");
        const newProjectBtn = document.getElementById("newProjectBtn");
        const projectTitle = document.getElementById("projectTitle");
        const projectConfirm = document.getElementById("projectConfirm");
        const projectCancel = document.getElementById("projectCancel");

        let currentProject;
        let currentProjectH3;

        newProjectBtn.addEventListener("click", () => {
            projectModal("add");
            projectDialog.showModal();
        })
        newProjects.addEventListener("click", (event) => {
            const button = event.target.closest("button");
            if (!button) return;
            currentProject = event.target.closest(".project.tab");
            currentProjectH3 = currentProject.querySelector("h3");
            if (button.className === "editProject") {
                projectModal("edit");
            } else if (button.className === "deleteProject") {
                projectModal("delete");
            }
            projectTitle.value = currentProjectH3.textContent;
            projectDialog.showModal();
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
                currentProject.click();
            }
            else if (projectConfirm.className === "deleteBtn") {
                deleteProject();
                allTab.click();
            }
        });
        projectCancel.addEventListener("click", () => {
            projectDialog.close();
            projectForm.reset();
        });

        function createProject() {
            const title = projectTitle.value;
            if (title === "") alert("Please enter a title");
            else if (projects.projectsList.some(element => element.title === title)) {
                alert("Project already exists!");
            } else {
                projects.createProject(title);
                displayProject(title);
                projectDialog.close();
                projectForm.reset();
                projectsCount();
            }
        };
        function editProject() {
            const newTitle = projectTitle.value;
            const oldTitle = currentProjectH3.textContent;
            if (newTitle === "") alert("Please enter new title");
            else if (projects.projectsList.some(element => element.title === newTitle)) {
                alert("Project already exists!");
            } else {
                projects.editProject(newTitle, oldTitle);
                projectDialog.close();
                projectForm.reset();
                currentProjectH3.textContent = newTitle;
            }
        }
        function deleteProject() {
            const title = projectTitle.value;
            projects.deleteProject(title);
            currentProject.remove();
            projectDialog.close();
            projectForm.reset();
            projectsCount();
        }

        function projectModal(value) {
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
        editImg.alt = "pen writing on paper icon";
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

    function projectsCount() {
        const projectsCount = document.getElementById("projectsCount");
        projectsCount.textContent = `(${projects.projectsList.length})`;
    }

    const nav = document.querySelector("nav");
    nav.addEventListener("click", (event) => {
        const projectTab = event.target.closest(".project.tab");
        if (!projectTab) return;
        selectTab(projectTab);
    })
    function selectTab(tab) {
        const selectedEL = document.querySelector(".selected");
        if (selectedEL) selectedEL.classList.remove("selected");
        tab.classList.add("selected");
    }

    const allTab = document.getElementById("allTab");
    const todayTab = document.getElementById("todayTab");
    const weekTab = document.getElementById("weekTab");

    allTab.addEventListener("click", () => {
        updateTabTitle("All");
        updateTabIcon("images/calendar.png", "calendar icon");

    })
    todayTab.addEventListener("click", () => {
        updateTabTitle("Today");
        updateTabIcon("images/today.png", "checked calendar icon");
    })
    weekTab.addEventListener("click", () => {
        updateTabTitle("Week");
        updateTabIcon("images/timeline-week.png", "timeline calendar icon");
    })

    let currentProject;
    let currentProjectH3;

    newProjects.addEventListener("click", (event) => {
        const projectTab = event.target.closest(".project.tab");
        if (!projectTab) return;
        const projectTabTitle = projectTab.querySelector("h3");
        currentProject = event.target.closest(".project.tab");
        currentProjectH3 = currentProject.querySelector("h3");
        updateTabTitle(projectTabTitle.textContent);
        updateTabIcon("images/project.png", "pan and paper icon");
        tasksCount(projectTabTitle.textContent);

    })

    function updateTabTitle(newTitle) {
        const tabTitle = document.getElementById("tabTitle");
        tabTitle.textContent = newTitle;
    }
    function updateTabIcon(icon, text) {
        const tabIcon = document.getElementById("tabIcon");
        tabIcon.src = icon;
        tabIcon.alt = text;
    }

    function tasksCount(title) {
        const tasksCount = document.getElementById("tasksCount");
        let index = projects.projectsList.findIndex(el => el.title === title);
        tasksCount.textContent = `(${projects.projectsList[index].tasks.length})`;
    }

    const newTaskBtn = document.getElementById("newTaskBtn");
    const newTasks = document.getElementById("newTasks");
    const taskDialog = document.getElementById("taskDialog");
    const taskConfirm = document.getElementById("taskConfirm");
    const taskCancel = document.getElementById("taskCancel");
    const taskForm = document.getElementById("taskForm");
    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");
    const taskDate = document.getElementById("taskDate");
    const taskPriority = document.getElementById("taskPriority");

    newTaskBtn.addEventListener("click", () => {
        taskDialog.showModal();
    })

    taskConfirm.addEventListener("click", () => {
        // if (taskConfirm.className === "addBtn") {
        createTask();
        // }
        // else if (taskConfirm.className === "editBtn") {
        //     editTask();
        //     currentTask.click();
        // }
        // else if (taskConfirm.className === "deleteBtn") {
        //     deleteTask();
        // }
    })
    taskCancel.addEventListener("click", () => {
        taskDialog.close();
        taskForm.reset();
    });

    function createTask() {
        const title = taskTitle.value;
        const description = taskDescription.value;
        const date = taskDate.value;
        const priority = taskPriority.value;
        const projectH3 = currentProjectH3.textContent;
        let index = projects.projectsList.findIndex(el => el.title === projectH3);
        if (title === "") alert("Please enter a title");
        else if (projects.projectsList[index].tasks.some(el => el.title === title)) {
            alert("Project already exists!");
        } else {
            tasks.createTask(title, description, date, priority, index);
            displayTask(title, date, priority);
            tasksCount(projectH3);
            taskDialog.close();
            taskForm.reset();
        }
    }

    let currentTask;
    let currentTaskH3;

    newTasks.addEventListener("click", (event) => {
        const taskTab = event.target.closest(".task");
        if (!taskTab) return;
        const taskH3 = taskTab.querySelector("h3").textContent;
        const tabSpan = taskTab.querySelector("span");
        currentTask = event.target.closest(".task");
        currentTaskH3 = currentTask.querySelector("h3").textContent;
        const projectH3 = currentProjectH3.textContent;
        tabSpan.classList.toggle("completed");
        tasks.taskCompleted(taskH3, projectH3);
    })

    function taskModal(value) {
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

    function displayTask(title, date, priority) {
        const task = document.createElement("div");
        task.setAttribute("class", `task priority${priority}`);
        const taskSpan = document.createElement("span");
        const titleWrapper = document.createElement("div");
        titleWrapper.setAttribute("class", "titleWrapper");
        const taskH3 = document.createElement("h3");
        taskH3.setAttribute("class", "taskH3");
        taskH3.textContent = `${title}`;
        const taskDetails = document.createElement("div");
        taskDetails.setAttribute("class", "taskDetails");
        const taskDate = document.createElement("p");
        taskDate.setAttribute("class", "taskDate");
        taskDate.textContent = `${date}`;
        const taskButtons = document.createElement("div");
        taskButtons.setAttribute("class", "taskButtons");
        const taskInfo = document.createElement("button");
        const infoImg = document.createElement("img");
        infoImg.src = "images/info.png";
        infoImg.alt = "info icon";
        const taskEdit = document.createElement("button");
        const editImg = document.createElement("img");
        editImg.src = "images/edit.png";
        editImg.alt = " pen writing on paper icon";
        const taskDelete = document.createElement("button");
        const deleteImg = document.createElement("img");
        deleteImg.src = "images/delete.png";
        deleteImg.alt = "trash bin icon";

        newTasks.appendChild(task);
        task.append(taskSpan, titleWrapper, taskDetails);
        titleWrapper.appendChild(taskH3);
        taskDetails.append(taskDate, taskButtons);
        taskButtons.append(taskInfo, taskEdit, taskDelete);
        taskInfo.appendChild(infoImg);
        taskEdit.appendChild(editImg);
        taskDelete.appendChild(deleteImg);
    }

    function displayProjectsList() {
        projects.projectsList.forEach(el => displayProject(el.title));
        projectsCount();
        allTab.click();
    }

    return {
        initPage,
        displayProjectsList,

    }
})()

export default dom;
