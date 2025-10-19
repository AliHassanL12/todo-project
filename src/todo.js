function createTodo(title, description, dueDate, priority, notes, project = null, id = null) {
    let currentProject;
    let todoID; 
    if (project) currentProject = project;
    else currentProject = null;

    if (todoID) todoID = id;
    else todoID = crypto.randomUUID();

    let details = {
        title,
        description,
        dueDate,
        priority, 
        notes
    }

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

    function storageObject() {
        return {
            currentProject,
            todoID,
            details
        }
    }


    return {
        details, 
        assignToProject,
        getAssignedProject, 
        getID,
        setDetails,
        storageObject
    }
}

export { createTodo };