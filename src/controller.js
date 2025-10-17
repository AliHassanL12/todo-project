import { colorPicker } from "./colorPicker";
import { domDisplay } from "./domListDisplayer";
import { createProject } from "./project";
import { projectTracker } from "./projectTracker";
import { createTodo } from "./todo";
import { listener } from "./domListeners";

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

    function addTodo(project, todo) {
        todo.assignToProject(project);
        project.addToList(todo);
    }

    function displayList(project) {
        projectTracker.setCurrentProject(project);
        const list = project.getList();
        domDisplay.displayList(list);
        listener.attachDynamicListeners();
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
        domDisplay.clearMainContentDOM();
        displayList(projectTracker.getCurrentProject());
    }

    function addNewTodo(title, description, dueDate, priority, notes) {
        const todo = createTodo(title, description, dueDate, priority, notes);
        addTodo(projectTracker.getCurrentProject(), todo);
        domDisplay.clearMainContentDOM();
        displayList(projectTracker.getCurrentProject());
    }

    function removeTodo(id) {
        projectTracker.getCurrentProject().removeTodo(id);
        domDisplay.clearMainContentDOM();
        displayList(projectTracker.getCurrentProject());
    }

    function switchProjects(name) {
        const list = projectTracker.getProjects();
        const newCurrentProject = list.find((project) => project.getProjectName() === name);
        domDisplay.clearMainContentDOM();
        displayList(newCurrentProject);
    }

    return {
        init,
        addTodo,
        displayList,
        returnColor,
        createNewProject,
        getTodoID,
        getProjectAssignedToTodo,
        findTodo,
        setCurrentTodo,
        getCurrentTodo,
        setTodoDetails,
        addNewTodo,
        removeTodo,
        switchProjects,
    }
})();

export {
    controller
}