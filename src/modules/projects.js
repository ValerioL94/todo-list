const projects = (() => {
    let projectsList = [];

    class Project {
        constructor(icon, title) {
            this.icon = icon;
            this.title = title;
            this.tasks = [];
        }
    }
})()

export default projects