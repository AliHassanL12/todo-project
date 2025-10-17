import { controller } from "./controller";
import { domDisplay } from "./domListDisplayer";
import { domData } from "./domDataRetriever";
const domDialog = (function() {

    function expandTodo(event) {
        const id = domData.getIDFromEvent(event);

        const todo = controller.findTodo(id);
        const dialog = document.querySelector('.todo-details');
        const h2 = document.querySelector('.title')
        const description = document.querySelector('.description');
        const dueDate = document.querySelector('.due-date');
        const priority = document.querySelector('.priority');
        const notes = document.querySelector('.notes');

        h2.textContent = todo.details.title;
        description.textContent = todo.details.description;
        dueDate.textContent = todo.details.dueDate;
        priority.textContent = todo.details.priority;
        notes.textContent = todo.details.notes;

        dialog.showModal();
    }

    function editDetails(event) {
        const dialog = document.querySelector('.edit-details')
        const id = domData.getIDFromEvent(event);

        const todo = controller.findTodo(id);
        controller.setCurrentTodo(todo);
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#due-date');
        const priority = document.querySelector('#priority');
        const notes = document.querySelector('#notes');

        title.value = todo.details.title;
        description.value = todo.details.description;
        dueDate.value = todo.details.dueDate;
        priority.value = todo.details.priority;
        notes.value = todo.details.notes;

        dialog.showModal();
    }

    function closeDialog(event) {
        event.preventDefault();
        const dialog = event.target.closest('dialog');
        dialog.close();
    }

    function submitDetails(event) {
        event.preventDefault();
        const todo = controller.getCurrentTodo();
        const titleVal = document.querySelector('#title').value;
        const descriptionVal = document.querySelector('#description').value;
        const dueDateVal = document.querySelector('#due-date').value;
        const priorityVal = document.querySelector('#priority').value;
        const notesVal = document.querySelector('#notes').value;
        controller.setCurrentTodo(null);
        if (!todo) {
            controller.addNewTodo(titleVal, descriptionVal, dueDateVal, priorityVal, notesVal);
            closeDialog(event);
        } else {
            controller.setTodoDetails(todo, titleVal, descriptionVal, dueDateVal, priorityVal, notesVal);
            closeDialog(event);
        }
    }

    function submitNewProject(event) {
        event.preventDefault();
        const form = document.querySelector('.project-form');
        const name = document.querySelector('#name').value;
        controller.createNewProject(name);
        const projectListItems = document.querySelectorAll('.project-list-item');
        projectListItems.forEach((projectListItem) => {
            projectListItem.addEventListener('click', domDisplay.switchProjects);
        })
        closeDialog(event);
        form.reset();
    }

    function addTodo() {
        const dialog = document.querySelector('.edit-details');
        const form = document.querySelector('form');
        form.reset();
        dialog.showModal();
    }

    function addProject() {
        const dialog = document.querySelector('.project');
        dialog.showModal();
    }


    return {
        expandTodo,
        closeDialog,
        editDetails,
        submitDetails,
        submitNewProject,
        addTodo,
        addProject
    }
})();

export {
    domDialog
}