function createTodo(title, description, dueDate, priority, notes) {
    let currentProject = null;
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

    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        assignToProject,
        getAssignedProject, 
        getID
    }
}

export { createTodo };