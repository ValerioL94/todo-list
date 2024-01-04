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

export default toggleSidebar;