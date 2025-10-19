import { domDisplay } from "./domListDisplayer";
import { createProject } from "./project";
import { projectTracker } from "./projectTracker";
import { createTodo } from "./todo";
import { domData } from "./domDataRetriever";
import { storage } from "./localStorage";

const controller = (function () {

    function init() {
        storage.populateFromStorage('projects')
        displayList(projectTracker.getCurrentProject());
        // const defaultProject = createNewProject('default');
        // projectTracker.setCurrentProject(defaultProject);
        // displayList(projectTracker.getCurrentProject());
        // addTodo('dsa', 'dsa', 'dsa', 'dsa', 'dsa' );
        // storage.populateFromStorage('projects');
    }

    function createNewProject(name) {
        const project = createProject(name);
        projectTracker.addProject(project);
        domDisplay.addToDOMList(name);
        storage.setItem('projects', projectTracker.getProjects())
        // storage.addToStorage('projects', projectTracker.storageObject())
        return project; 
    }

    function displayList(project) {
        const list = project.getList();
        domDisplay.displayList(list);
    }

    function findTodo(id) {
        const todoListArray = projectTracker.getCurrentProject().getList();
        const requestedTodo = todoListArray.find((todo) => todo.getID() === id);
        return requestedTodo;
    }

    function setTodoDetails(todo, title, description, dueDate, priority, notes) {
        todo.setDetails(title, description, dueDate, priority, notes);
        domDisplay.clearMainContentDOM();
        displayList(projectTracker.getCurrentProject());
    }

    function addTodo(title, description, dueDate, priority, notes) {
        const currentProject = projectTracker.getCurrentProject();
        const todo = createTodo(title, description, dueDate, priority, notes);
        currentProject.addToList(todo);
        todo.assignToProject(currentProject);
        domDisplay.displayTodo(todo);
        storage.setItem('projects', projectTracker.getProjects())
        // storage.addToStorage('projects', projectTracker.storageObject())
    }

    function removeTodo(event) {
        const id = domData.getIDFromEvent(event);
        const currentProject = projectTracker.getCurrentProject();
        currentProject.removeTodo(id);
        domDisplay.removeTodoFromDom(id);
    }

    function switchProjects(name) {
        const list = projectTracker.getProjects();
        const newCurrentProject = list.find((project) => project.getProjectName() === name);
        projectTracker.setCurrentProject(newCurrentProject);
        domDisplay.clearMainContentDOM();
        displayList(newCurrentProject);
    }

    return {
        init,
        displayList,
        createNewProject,
        findTodo,
        setTodoDetails,
        removeTodo,
        switchProjects,
        addTodo
    }
})();

export {
    controller
}