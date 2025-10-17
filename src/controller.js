import { colorPicker } from "./colorPicker";
import { domDisplay } from "./domListDisplayer";
import { createProject } from "./project";
import { projectTracker } from "./projectTracker";
import { createTodo } from "./todo";
import { listener } from "./domListeners";
import { domData } from "./domDataRetriever";

const controller = (function () {
    let currentTodo = null;

    function init() {
        const defaultProject = createNewProject('default');
        projectTracker.setCurrentProject(defaultProject);
        displayList(projectTracker.getCurrentProject());
    }

    function createNewProject(name) {
        const project = createProject(name);
        projectTracker.addProject(project);
        domDisplay.addToDOMList(name);
        return project; 
    }

    function displayList(project) {
        projectTracker.setCurrentProject(project);
        const list = project.getList();
        domDisplay.displayList(list);
    }

    function returnColor(priority) {
        return colorPicker.returnColor(priority);
    }

    function getTodoID(todo) {
        return todo.getID();
    }

    function getProjectAssignedToTodo(todo) {
        return todo.getAssignedProject();
    }

    function findTodo(id) {
        const todoListArray = projectTracker.getCurrentProject().getList();
        const requestedTodo = todoListArray.find((todo) => todo.getID() === id);
        return requestedTodo;
    }

    function setCurrentTodo(todo) {
        currentTodo = todo;
    }

    function getCurrentTodo() {
        return currentTodo;
    }

    function setTodoDetails(todo, title, description, dueDate, priority, notes) {
        todo.setDetails(title, description, dueDate, priority, notes);
        const todoID = todo.getID();
        domDisplay.removeTodoFromDom(todoID);
        domDisplay.displayTodo(todo);
    }

    function addTodo(title, description, dueDate, priority, notes) {
        const currentProject = projectTracker.getCurrentProject();
        const todo = createTodo(title, description, dueDate, priority, notes);
        currentProject.addToList(todo);
        todo.assignToProject(currentProject);
        domDisplay.displayTodo(todo);
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
        domDisplay.clearMainContentDOM();
        displayList(newCurrentProject);
    }

    return {
        init,
        displayList,
        returnColor,
        createNewProject,
        getTodoID,
        getProjectAssignedToTodo,
        findTodo,
        setCurrentTodo,
        getCurrentTodo,
        setTodoDetails,
        removeTodo,
        switchProjects,
        addTodo
    }
})();

export {
    controller
}