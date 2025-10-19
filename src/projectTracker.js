const projectTracker = (function() {
    let currentProject = null;
    let projects = [];

    function addProject(project) {
        projects.push(project);
    }

    function getProjects() {
        return projects;
    }

    function setCurrentProject(project) {
        currentProject = project;
    }

    function getCurrentProject() {
        return currentProject
    }

    function populateProjects(list) {
        projects = list;
    }

    function storageObject() {
        return {
            projects
        }
    }

    return {
        addProject,
        getProjects,
        setCurrentProject,
        getCurrentProject,
        storageObject,
        populateProjects
    }
})();

export {
    projectTracker
}