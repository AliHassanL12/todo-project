import { colorPicker } from "./colorPicker";
import { domDisplay } from "./domListDisplayer";
import { createProject } from "./project";
import { projectTracker } from "./projectTracker";

const controller = (function () {
    function addTodo(project, todo) {
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

    return {
        addTodo,
        displayList,
        returnColor,
        createNewProject
    }
})();

export {
    controller
}