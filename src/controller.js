import { colorPicker } from "./colorPicker";
import { domDisplay } from "./domListDisplayer";

const controller = (function () {
    function addTodo(project, todo) {
        project.addToList(todo);
    }

    function displayList(project) {
        const list = project.getList();
        domDisplay.displayList(list);
    }

    function returnColor(priority) {
        return colorPicker.returnColor(priority);
    }

    return {
        addTodo,
        displayList,
        returnColor
    }
})();

export {
    controller
}