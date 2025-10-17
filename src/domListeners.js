import { domDisplay } from './domListDisplayer.js';

const listener = (function() {
    function attachDynamicListeners() {
        const expandButtons = document.querySelectorAll('.expand-button');
        expandButtons.forEach((expandButton) => {
            expandButton.addEventListener('click', domDisplay.displayDetails);
        });

        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach((editButton) => {
            editButton.addEventListener('click', domDisplay.editDetails);
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
        addTodoButton.addEventListener('click', domDisplay.addTodo);

        const closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach((closeButton) => {
            closeButton.addEventListener('click', domDisplay.closeDialog);
        });

        const submitDetailsButton = document.querySelector('.submit-button');
        submitDetailsButton.addEventListener('click', domDisplay.submitDetails);

        const addProjectButton = document.querySelector('.add-project');
        addProjectButton.addEventListener('click', domDisplay.addProject);

        const submitProjectButton = document.querySelector('.submit-project');
        submitProjectButton.addEventListener('click', domDisplay.submitNewProject);
    };

    return {
        attachFixedListeners,
        attachDynamicListeners
    }
})();

export {
    listener
}