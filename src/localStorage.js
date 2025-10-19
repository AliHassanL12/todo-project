import { createProject } from "./project";
import { projectTracker } from "./projectTracker";
import { createTodo } from "./todo";
const storage = (function() {
    function setItem(key, projectsArray) {
        const mapped = projectsArray.map((project) => project.storageObject());
        for (const project of mapped) {
            if (project.list) {
                const mappedTodos = project.list.map((todo) => todo.storageObject());
                project.list = mappedTodos;
            }
        }
        localStorage.setItem(key, JSON.stringify(mapped))
    }
    
    function populateFromStorage(key) {
        let projects = JSON.parse(localStorage.getItem(key));
        let mappedProjects = projects.map((project) => createProject(project.name, project.list));
        for (const project of mappedProjects) {
            const list = project.getList();
            const mappedList = list.map((todo) => createTodo(
                todo.details.title,
                todo.details.description,
                todo.details.dueDate,
                todo.details.priority,
                todo.details.notes,
                todo.currentProject,
                todo.todoID
            ));
            project.setList(mappedList);
        }

        projectTracker.setCurrentProject(mappedProjects[0]);
        projectTracker.populateProjects(mappedProjects);
    }

    return {
        setItem,
        populateFromStorage
    }
})();

export {
    storage
}