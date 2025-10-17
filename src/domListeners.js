import { domDisplay } from './domListDisplayer.js';
import { domDialog } from './domDialog.js';

const listener = (function() {
    function attachDynamicListeners() {
        const expandButtons = document.querySelectorAll('.expand-button');
        expandButtons.forEach((expandButton) => {
            expandButton.addEventListener('click', domDialog.expandTodo);
        });

        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach((editButton) => {
            editButton.addEventListener('click', domDialog.editDetails);
        })

        const removeButtons = document.querySelectorAll('.remove-button');
        removeButtons.forEach((removeButton) => {
            removeButton.addEventListener('click', domDisplay.removeTodo);
        })

        const projectListItems = document.querySelectorAll('.project-list-item');
        projectListItems.forEach((projectListItem) => {
            projectListItem.addEventListener('click', domDisplay.switchProjects);
        })
    }

    function attachFixedListeners() {
        const addTodoButton = document.querySelector('.add-todo-button');
        addTodoButton.addEventListener('click', domDialog.addTodo);

        const closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach((closeButton) => {
            closeButton.addEventListener('click', domDialog.closeDialog);
        });

        const submitDetailsButton = document.querySelector('.submit-button');
        submitDetailsButton.addEventListener('click', domDialog.submitDetails);

        const addProjectButton = document.querySelector('.add-project');
        addProjectButton.addEventListener('click', domDialog.addProject);

        const submitProjectButton = document.querySelector('.submit-project');
        submitProjectButton.addEventListener('click', domDialog.submitNewProject);
    };

    return {
        attachFixedListeners,
        attachDynamicListeners
    }
})();

export {
    listener
}