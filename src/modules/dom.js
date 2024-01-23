import projects from "./projects";
import tasks from "./tasks";
import { format, parseISO, differenceInDays } from 'date-fns';

const dom = (() => {
    const newProjects = document.getElementById("newProjects");
    const taskProject = document.getElementById("taskProject");
    function initPage() {
        const arrowBtn = document.getElementById("arrow");
        const sidebar = document.getElementById("sidebar");
        arrowBtn.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
            flipArrow();
        });
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
        const tabsWrapper = document.querySelector(".tabs-wrapper");
        tabsWrapper.addEventListener("click", (event) => {
            const projectTab = event.target.closest(".project.tab");
            if (projectTab) {
                selectTab(projectTab);
            }
        })
        newProjectBtn.addEventListener("click", () => {
            projectModal("add");
            projectDialog.showModal();
        })

        let currentProject;
        let currentProjectH3;
        newProjects.addEventListener("click", (event) => {
            const button = event.target.closest("button");
            const projectTab = event.target.closest(".project.tab");
            if (button) {
                currentProject = projectTab;
                currentProjectH3 = projectTab.querySelector("h3");
                if (button.className === "editProject") {
                    projectModal("edit");
                } else if (button.className === "deleteProject") {
                    projectModal("delete");
                }
                projectDialog.showModal();
            } else if (projectTab) {
                currentProject = projectTab;
                currentProjectH3 = projectTab.querySelector("h3");
                selectTab(projectTab);
                updateTabTitle(currentProjectH3.textContent);
                updateTabIcon("images/project.png", "pan and paper icon");
                countTasks(currentProjectH3.textContent);
                displayTasks(currentProjectH3.textContent);
            }
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
            localStorage.setItem('projects', JSON.stringify(projects.projectsList));
        });
        projectCancel.addEventListener("click", () => {
            projectDialog.close();
            projectForm.reset();
        });

        function createProject() {
            const title = projectTitle.value;
            if (title === "") alert("Please enter a title");
            else if (projects.projectsList.some(el => el.title === title)) {
                alert("Project already exists!");
            } else {
                projects.createProject(title);
                displayProject(title);
                projectDialog.close();
                projectForm.reset();
                projectsCount();
                addOption(title);
            }
        };
        function editProject() {
            const oldTitle = currentProjectH3.textContent;
            const newTitle = projectTitle.value;
            if (newTitle === "") alert("Please enter new title");
            else if (projects.projectsList.some(element => element.title === newTitle)) {
                alert("Project already exists!");
            } else {
                projects.editProject(newTitle, oldTitle);
                editOption(oldTitle, newTitle);
                currentProjectH3.textContent = projectTitle.value;
                currentProject.click();
                projectDialog.close();
                projectForm.reset();
            }
        }
        function deleteProject() {
            const title = projectTitle.value;
            projects.deleteProject(title);
            currentProject.remove();
            removeOption(title);
            projectDialog.close();
            projectForm.reset();
            projectsCount();
            allTab.click();
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
                    projectTitle.value = currentProject.textContent;
                    projectConfirm.className = "editBtn";
                    projectConfirm.textContent = "Edit";
                    break;
                case "delete":
                    dialogTitle.textContent = "Delete Project";
                    projectTitle.disabled = true;
                    projectTitle.value = currentProject.textContent;
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
        displayAllTasks();
    })
    todayTab.addEventListener("click", () => {
        updateTabTitle("Today");
        updateTabIcon("images/today.png", "checked calendar icon");
        displayTodayTasks();
    })
    weekTab.addEventListener("click", () => {
        updateTabTitle("Week");
        updateTabIcon("images/timeline-week.png", "timeline calendar icon");
        displayWeekTasks();
    })

    function displayTasks(project) {
        newTasks.innerHTML = "";
        let index = projects.getIndex(project);
        projects.projectsList[index].tasks.forEach(el => displayTask(el.title, el.dueDate, el.priority, el.project, el.completed));

    }

    function updateTabTitle(newTitle) {
        const tabTitle = document.getElementById("tabTitle");
        tabTitle.textContent = newTitle;
    }
    function updateTabIcon(icon, text) {
        const tabIcon = document.getElementById("tabIcon");
        tabIcon.src = icon;
        tabIcon.alt = text;
    }

    function countTasks(title) {
        const tasksCount = document.getElementById("tasksCount");
        let index = projects.getIndex(title);
        tasksCount.textContent = `(${projects.projectsList[index].tasks.length})`;
    }

    const newTaskBtn = document.getElementById("newTaskBtn");
    const newTasks = document.getElementById("newTasks");
    const taskDialog = document.getElementById("taskDialog");
    const taskDialogTitle = document.getElementById("taskDialogTitle");
    const taskConfirm = document.getElementById("taskConfirm");
    const taskCancel = document.getElementById("taskCancel");
    const taskForm = document.getElementById("taskForm");
    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");
    const taskDate = document.getElementById("taskDate");
    const taskPriority = document.getElementById("taskPriority");

    newTaskBtn.addEventListener("click", () => {
        taskModal("add");
        taskDialog.showModal();
    })

    let currentTask;
    let currentTaskH3;
    newTasks.addEventListener("click", (event) => {
        const taskTab = event.target.closest(".task");
        const button = event.target.closest("button");
        if (button) {
            currentTask = taskTab;
            currentTaskH3 = taskTab.querySelector("h3");
            if (button.className === "taskInfo") {
                taskModal("info");
                taskDialog.showModal();
            } else if (button.className === "editTask") {
                taskModal("edit");
                taskDialog.showModal();
            } else if (button.className === "deleteTask") {
                taskModal("delete");
                taskDialog.showModal();
            }
        } else if (taskTab) {
            const taskH3 = taskTab.querySelector("h3");
            const taskDate = taskTab.querySelector("p");
            taskH3.classList.toggle("completed");
            taskDate.classList.toggle("completed");
            let project = taskTab.dataset.project;
            tasks.taskCompleted(taskH3.textContent, project);
            localStorage.setItem('projects', JSON.stringify(projects.projectsList));
        }
    })

    taskConfirm.addEventListener("click", () => {
        if (taskConfirm.className === "addBtn") {
            createTask();
        }
        else if (taskConfirm.className === "editBtn") {
            editTask();
        }
        else if (taskConfirm.className === "deleteBtn") {
            deleteTask();
        }
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
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
        const project = taskProject.value;
        let index = projects.getIndex(project);
        if (title === "") alert("Please enter a title");
        else if (projects.projectsList[index].tasks.some(el => el.title === title)) {
            alert("Task already exists!");
        } else {
            tasks.createTask(title, description, date, priority, project, index);
            displayTask(title, date, priority, project);
            countTasks(project);
            taskDialog.close();
            taskForm.reset();
            allTab.click();
        }
    }
    function editTask() {
        const title = taskTitle.value;
        const description = taskDescription.value;
        const date = taskDate.value;
        const priority = taskPriority.value;
        let project = currentTask.dataset.project;
        let projectIndex = projects.getIndex(project);
        let task = currentTaskH3.textContent;
        let taskIndex = tasks.getIndex(projectIndex, task);
        if (title === "") alert("Please enter a title");
        else if (projects.projectsList[projectIndex].tasks.some(el => el.title === title)) {
            alert("Task already exists!");
        } else {
            tasks.editTask(title, description, date, priority, project, taskIndex, projectIndex);
            currentTaskH3.textContent = title;
            currentTask.querySelector("p").textContent = date;
            currentTask.setAttribute("data-project", `${project}`);
            currentTask.setAttribute("class", `task priority${priority}`);
            taskDialog.close();
            taskForm.reset();
        }
    }
    function deleteTask() {
        let project = currentTask.dataset.project;
        let projectIndex = projects.getIndex(project);
        let task = currentTaskH3.textContent;
        let taskIndex = tasks.getIndex(projectIndex, task);
        tasks.deleteTask(taskIndex, projectIndex);
        currentTask.remove();
        taskDialog.close();
        taskForm.reset();
        countTasks(project);
    }

    function taskModal(value) {
        const infoProject = document.getElementById("infoProject");
        const infoCompleted = document.getElementById("infoCompleted");
        const taskCompleted = document.getElementById("taskCompleted");
        let project;
        let projectIndex;
        let task;
        let taskIndex;
        let tempTask;
        switch (value) {
            case "info":
                project = currentTask.dataset.project;
                projectIndex = projects.getIndex(project);
                task = currentTaskH3.textContent;
                taskIndex = tasks.getIndex(projectIndex, task);
                tempTask = projects.projectsList[projectIndex].tasks[taskIndex];
                taskDialogTitle.textContent = "Task Info";
                taskTitle.value = tempTask.title;
                taskTitle.disabled = true;
                taskDescription.value = tempTask.description;
                taskDescription.disabled = true;
                taskDate.value = tempTask.dueDate;
                taskDate.disabled = true;
                taskPriority.value = tempTask.priority;
                taskPriority.disabled = true;
                infoProject.classList.remove("hidden");
                infoCompleted.classList.remove("hidden");
                taskProject.value = tempTask.project;
                taskProject.disabled = true;
                taskCompleted.value = tempTask.completed;
                taskCompleted.disabled = true;
                taskConfirm.classList.add("hidden");
                break;
            case "add":
                taskDialogTitle.textContent = "New Task";
                taskTitle.disabled = false;
                taskDescription.disabled = false;
                taskDate.disabled = false;
                taskPriority.disabled = false;
                infoProject.classList.remove("hidden");
                taskProject.disabled = false;
                infoCompleted.classList.add("hidden");
                taskConfirm.classList.remove("hidden")
                taskConfirm.className = "addBtn";
                taskConfirm.textContent = "Add";
                break;
            case "edit":
                project = currentTask.dataset.project;
                projectIndex = projects.getIndex(project);
                task = currentTaskH3.textContent;
                taskIndex = tasks.getIndex(projectIndex, task);
                tempTask = projects.projectsList[projectIndex].tasks[taskIndex];
                taskDialogTitle.textContent = "Edit Task";
                taskTitle.value = tempTask.title;
                taskTitle.disabled = false;
                taskDescription.value = tempTask.description;
                taskDescription.disabled = false;
                taskDate.value = tempTask.dueDate;
                taskDate.disabled = false;
                taskPriority.value = tempTask.priority;
                taskPriority.disabled = false;
                infoProject.classList.add("hidden");
                infoCompleted.classList.add("hidden");
                taskConfirm.classList.remove("hidden")
                taskConfirm.className = "editBtn";
                taskConfirm.textContent = "Edit";
                break;
            case "delete":
                project = currentTask.dataset.project;
                projectIndex = projects.getIndex(project);
                task = currentTaskH3.textContent;
                taskIndex = tasks.getIndex(projectIndex, task);
                tempTask = projects.projectsList[projectIndex].tasks[taskIndex];
                taskDialogTitle.textContent = "Delete Task";
                taskTitle.value = tempTask.title;
                taskTitle.disabled = true;
                taskDescription.value = tempTask.description;
                taskDescription.disabled = true;
                taskDate.value = tempTask.dueDate;
                taskDate.disabled = true;
                taskPriority.value = tempTask.priority;
                taskPriority.disabled = true;
                infoProject.classList.add("hidden");
                infoCompleted.classList.add("hidden");
                taskConfirm.classList.remove("hidden")
                taskConfirm.className = "deleteBtn";
                taskConfirm.textContent = "Delete";
                break;
        }
    }

    function displayTask(title, date, priority, project, completed) {
        const task = document.createElement("div");
        task.setAttribute("class", `task priority${priority}`);
        task.setAttribute("data-project", `${project}`);
        const titleWrapper = document.createElement("div");
        titleWrapper.setAttribute("class", "titleWrapper");
        const taskH3 = document.createElement("h3");
        taskH3.setAttribute("class", "taskH3");
        taskH3.textContent = `${title}`;
        taskH3.setAttribute
        const taskDetails = document.createElement("div");
        taskDetails.setAttribute("class", "taskDetails");
        const taskDate = document.createElement("p");
        taskDate.setAttribute("class", "taskDate");
        taskDate.textContent = `${date}`;
        const taskButtons = document.createElement("div");
        taskButtons.setAttribute("class", "taskButtons");
        const infoBtn = document.createElement("button");
        infoBtn.setAttribute("class", "taskInfo");
        const infoImg = document.createElement("img");
        infoImg.src = "images/info.png";
        infoImg.alt = "info icon";
        const editBtn = document.createElement("button");
        editBtn.setAttribute("class", "editTask");
        const editImg = document.createElement("img");
        editImg.src = "images/edit.png";
        editImg.alt = " pen writing on paper icon";
        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "deleteTask");
        const deleteImg = document.createElement("img");
        deleteImg.src = "images/delete.png";
        deleteImg.alt = "trash bin icon";
        if (completed === "Yes") {
            taskH3.classList.add("completed");
            taskDate.classList.add("completed");
        }

        newTasks.appendChild(task);
        task.append(titleWrapper, taskDetails);
        titleWrapper.appendChild(taskH3);
        taskDetails.append(taskDate, taskButtons);
        taskButtons.append(infoBtn, editBtn, deleteBtn);
        infoBtn.appendChild(infoImg);
        editBtn.appendChild(editImg);
        deleteBtn.appendChild(deleteImg);
    }

    function displayProjectsList() {
        projects.projectsList.forEach(el => displayProject(el.title));
        projects.projectsList.forEach(el => addOption(el.title));
        projectsCount();
    }

    function addOption(value, index) {
        let newOption = new Option(value);
        taskProject.add(newOption, index);
    }

    function editOption(oldValue, newValue) {
        let options = document.querySelectorAll("#taskProject option");
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === oldValue) {
                taskProject.remove(i)
                addOption(newValue, i);
            }
        }
    }

    function removeOption(value) {
        let options = document.querySelectorAll("#taskProject option");
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === value) taskProject.remove(i);
        }
    }

    const tasksCount = document.getElementById("tasksCount");
    function displayAllTasks() {
        newTasks.innerHTML = "";
        let allTasks = [];
        projects.projectsList
            .forEach(el => el.tasks
                .forEach(el => allTasks.push(el)));
        const sortedAllTasks = allTasks.sort(function (a, b) {
            a = a.dueDate.split("-");
            b = b.dueDate.split("-");
            return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
        })
        sortedAllTasks.forEach(el => displayTask(el.title, el.dueDate, el.priority, el.project, el.completed));
        tasksCount.textContent = `(${sortedAllTasks.length})`;
    }

    const todayDate = format(new Date(), 'yyyy-MM-dd');
    function displayTodayTasks() {
        newTasks.innerHTML = "";
        let todayTasks = [];
        projects.projectsList
            .forEach(el => el.tasks
                .forEach(el => el.dueDate === todayDate ? todayTasks.push(el) : ""));
        todayTasks.forEach(el => displayTask(el.title, el.dueDate, el.priority, el.project, el.completed));
        tasksCount.textContent = `(${todayTasks.length})`;
    }

    function displayWeekTasks() {
        newTasks.innerHTML = "";
        const date = parseISO(todayDate);
        let tempTasks = [];
        const weekTasks = [];
        projects.projectsList.
            forEach(el => el.tasks
                .forEach(el => tempTasks.push(el)));
        for (let i = 0; i < tempTasks.length; i++) {
            let parsed = parseISO(tempTasks[i].dueDate);
            if (differenceInDays(parsed, date) <= 7 &&
                differenceInDays(parsed, date) >= 0) {
                weekTasks.push(tempTasks[i]);
            }
        }
        const sortedWeekTasks = weekTasks.sort(function (a, b) {
            a = a.dueDate.split("-");
            b = b.dueDate.split("-");
            return a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
        })
        sortedWeekTasks.forEach(el => displayTask(el.title, el.dueDate, el.priority, el.project, el.completed));
        tasksCount.textContent = `(${sortedWeekTasks.length})`;
    }

    return {
        initPage,
        displayProjectsList,
        allTab,
    }
})()

export default dom;
