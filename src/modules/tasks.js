const tasks = (() => {

    class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.priority = priority
            this.completed = false;
        }
    }

})()

export default tasks