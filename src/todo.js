function createTodo(title, description, dueDate, priority, notes) {
    let currentProject = null;
    let details = {
        title,
        description,
        dueDate,
        priority, 
        notes
    }
    const todoID = crypto.randomUUID();

    function assignToProject(project) {
        const name = project.getProjectName();
        currentProject = name;
    }

    function getAssignedProject() {
        return currentProject;
    }

    function getID() {
        return todoID;
    }

    function setDetails(title, description, dueDate, priority, notes) {
        details.title = title;
        details.description = description;
        details.dueDate = dueDate;
        details.priority = priority;
        details.notes = notes;
    }


    return {
        details, 
        assignToProject,
        getAssignedProject, 
        getID,
        setDetails
    }
}

export { createTodo };