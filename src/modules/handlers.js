import projects from './projects.js'
import dom from './dom.js'

const handlers = (() => {
    function toggleSidebar() {
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
    }
    function selected() {
        const nav = document.querySelector("nav");
        nav.addEventListener("click", (event) => {
            const tab = event.target.closest(".tab");
            const selectedEL = document.querySelector(".selected");
            if (!tab) return;
            if (selectedEL) selectedEL.classList.remove("selected");
            tab.classList.add("selected");
        })
    }

    function projectModal() {
        const dialog = document.getElementById("dialog");
        const newProject = document.getElementById("newProject");
        const projectTitle = document.getElementById("projectTitle");
        const addProject = document.getElementById("projectConfirm");
        const cancelProject = document.getElementById("projectCancel");

        newProject.addEventListener("click", () => {
            dialog.className = "newProject";
            dom.modalType("add");
            dialog.showModal();
        });
        // projectTitle.addEventListener("keydown", (event) => {
        //     if (event.key === "Enter") {
        //         event.preventDefault();
        //         addProject.click();
        //     }
        // })
        addProject.addEventListener("click", () => {
            const title = projectTitle.value;
            if (title === "") alert("Please enter a title");
            else if (projects.projectsList.some(element => element.title === title)) {
                alert("Project already exists");
            } else {
                projects.createProject(title);
                dialog.close();
                projectTitle.value = "";
            }
        });
        cancelProject.addEventListener("click", () => {
            dialog.close();
            projectTitle.value = "";
        })
    }

    return {
        toggleSidebar,
        selected,
        projectModal,
    }
})()

export default handlers;