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

    return {
        addProject,
        getProjects,
        setCurrentProject,
        getCurrentProject
    }
})();

export {
    projectTracker
}