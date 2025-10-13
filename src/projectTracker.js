const projectTracker = (function() {
    let projects = [];

    function addProject(project) {
        projects.push(project);
    }

    function getProjects() {
        return projects;
    }

    return {
        addProject,
        getProjects
    }
})();

export {
    projectTracker
}