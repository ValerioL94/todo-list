const handlers = (() => {
    function toggleSidebar() {
        const main = document.querySelector("main");
        const arrowBtn = document.getElementById("arrow");
        arrowBtn.addEventListener("click", updateClass);
        arrowBtn.addEventListener("click", updateArrowBtn);

        function updateClass() {
            if (main.className == "") {
                main.className = "hide-sidebar";
            } else {
                main.className = "";
            }
        }

        function updateArrowBtn() {
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
    // function addProject() {
    //     const 
    // }

    return {
        toggleSidebar,
        selected,
    }
})()

export default handlers;