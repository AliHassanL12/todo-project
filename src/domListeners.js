import { domDisplay } from './domListDisplayer.js';
import { domDialog } from './domDialog.js';
import { controller } from './controller.js';

const listener = (function() {

    function attachListener(button, method) {
        button.addEventListener('click', method);
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

        const homeDefaultProject = document.querySelector('.default-project');
        homeDefaultProject.addEventListener('click', domDisplay.initialiseDefault)
    };

    return {
        attachFixedListeners,
        attachListener
    }
})();

export {
    listener
}