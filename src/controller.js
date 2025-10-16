import { colorPicker } from "./colorPicker";
import { domDisplay } from "./domListDisplayer";
import { createProject } from "./project";
import { projectTracker } from "./projectTracker";
import { createTodo } from "./todo";

const controller = (function () {
    let currentTodo = null;
    let currentProject = null;

    function addTodo(project, todo) {
        todo.assignToProject(project);
        project.addToList(todo);
    }

    function createNewProject(name) {
        domDisplay.addToDOMList(name);
        const project = createProject(name);
        projectTracker.addProject(project);
        return project; 
    }

    function displayList(project) {
        currentProject = project;
        const list = project.getList();
        domDisplay.displayList(list);
        domDisplay.attachListeners();
    }

    function returnColor(priority) {
        return colorPicker.returnColor(priority);
    }

    function getTodoID(todo) {
        return todo.getID();
    }

    function getTodoProject(todo) {
        return todo.getAssignedProject();
    }

    function findTodo(id) {
        const todoListArray = currentProject.getList();
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
        displayList(currentProject);
    }

    function addNewTodo(title, description, dueDate, priority, notes) {
        const todo = createTodo(title, description, dueDate, priority, notes);
        addTodo(currentProject, todo);
        domDisplay.clearMainContentDOM();
        displayList(currentProject);
    }

    function removeTodo(id) {
        currentProject.removeTodo(id);
        domDisplay.clearMainContentDOM();
        displayList(currentProject);
    }

    function switchProjects(name) {
        const list = projectTracker.getProjects();
        const newCurrentProject = list.find((project) => project.getProjectName() === name);
        domDisplay.clearMainContentDOM();
        displayList(newCurrentProject);
    }

    return {
        addTodo,
        displayList,
        returnColor,
        createNewProject,
        getTodoID,
        getTodoProject,
        findTodo,
        setCurrentTodo,
        getCurrentTodo,
        setTodoDetails,
        addNewTodo,
        removeTodo,
        switchProjects
    }
})();

export {
    controller
}