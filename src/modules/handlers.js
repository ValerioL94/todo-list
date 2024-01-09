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
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach(el => {
            el.addEventListener("click", () => {
                const selectedEl = document.querySelector(".selected");
                if (selectedEl) selectedEl.classList.remove("selected");
                el.classList.add("selected");
            });
        });
    }

    function projectModal() {
        const dialog = document.getElementById("dialog");
        const newProject = document.getElementById("newProject");
        const addProject = document.getElementById("addProject");
        const projectTitle = document.getElementById("projectTitle");
        const cancelProject = document.getElementById("cancelProject");

        newProject.addEventListener("click", () => {
            dialog.showModal();
        });
        addProject.addEventListener("click", () => {
            if (projectTitle.value != "") {
                projects.pushProject(projectTitle.value);
                dialog.close();
                projectTitle.value = "";
                dom.displayProject();
                selected();
            } else alert("Please enter a title");
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