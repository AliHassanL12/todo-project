import { colorPicker } from "./colorPicker";
import { domDisplay } from "./domListDisplayer";
import { createProject } from "./project";
import { projectTracker } from "./projectTracker";

const controller = (function () {
    function addTodo(project, todo) {
        todo.assignToProject(project);
        project.addToList(todo);
    }

    function createNewProject(name) {
        const project = createProject('default');
        projectTracker.addProject(project);
        return project; 
    }

    function displayList(project) {
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

    return {
        addTodo,
        displayList,
        returnColor,
        createNewProject,
        getTodoID,
        getTodoProject
    }
})();

export {
    controller
}