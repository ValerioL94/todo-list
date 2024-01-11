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
        const projectTitle = document.getElementById("projectTitle");
        const addProject = document.getElementById("addProject");
        const cancelProject = document.getElementById("cancelProject");

        newProject.addEventListener("click", () => {
            dialog.showModal();
        });
        projectTitle.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                addProject.click();
            }
        })
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