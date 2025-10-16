import { controller } from "./controller";
const domDisplay = (function() {
    function displayList(list) {
        for (const todo of list) {
            const mainContent = document.querySelector('.main-content');
            const todoContainer = document.createElement('div');
            const rightContainer = document.createElement('div');
            const title = document.createElement('span');
            const dueDate = document.createElement('span');
            const expandButton = document.createElement('button');
            const editDetailsButton = document.createElement('button');

            editDetailsButton.className = 'edit-button';
            expandButton.className = 'expand-button';
            todoContainer.className = 'todo-container';
            rightContainer.className = 'right-sub-container';

            todoContainer.dataset.project = controller.getTodoProject(todo);
            todoContainer.dataset.id = controller.getTodoID(todo);
            todoContainer.style.borderLeft = '3px solid ' + controller.returnColor(todo.priority);

            title.textContent = todo.title;
            dueDate.textContent = todo.dueDate;
            expandButton.textContent = 'View Details';
            editDetailsButton.textContent = 'Edit Details';

            mainContent.appendChild(todoContainer);
            todoContainer.appendChild(title);
            todoContainer.appendChild(rightContainer);
            rightContainer.appendChild(dueDate);
            rightContainer.appendChild(editDetailsButton);
            rightContainer.appendChild(expandButton);
        }
    }

    function attachListeners() {
        const expandButtons = document.querySelectorAll('.expand-button');
        expandButtons.forEach((expandButton) => {
            expandButton.addEventListener('click', displayDetails);
        });

        const closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach((closeButton) => {
            closeButton.addEventListener('click', closeDialog);
        });

        const submitDetailsButtons = document.querySelectorAll('.submit-button');
        submitDetailsButtons.forEach((submitDetailsButton) => {
            submitDetailsButton.addEventListener('click', submitDetails);
        })

        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach((editButton) => {
            editButton.addEventListener('click', editDetails);
        })
    };

    function displayDetails(event) {
        const [project, id] = returnIDsFromEvent(event);

        const todo = controller.findTodo(project, id);
        const dialog = document.querySelector('.todo-details');
        const h2 = document.querySelector('.title')
        const description = document.querySelector('.description');
        const dueDate = document.querySelector('.due-date');
        const priority = document.querySelector('.priority');
        const notes = document.querySelector('.notes');

        h2.textContent = todo.title;
        description.textContent = todo.description;
        dueDate.textContent = todo.dueDate;
        priority.textContent = todo.priority;
        notes.textContent = todo.notes;

        dialog.showModal();
    }

    function returnIDsFromEvent(event) {
        const expandButton = event.target;
        const todoContainer = expandButton.closest('.todo-container');
        const project = todoContainer.dataset.project;
        const id = todoContainer.dataset.id;
        return [project, id];
    }

    function editDetails(event) {
        const dialog = document.querySelector('.edit-details')
        const [project, id] = returnIDsFromEvent(event);

        const todo = controller.findTodo(project, id);
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#due-date');
        const priority = document.querySelector('#priority');
        const notes = document.querySelector('#notes');

        title.value = todo.title;
        description.value = todo.description;
        dueDate.value = todo.dueDate;
        priority.value = todo.priority;
        notes.value = todo.notes;

        dialog.showModal();
    }

    function submitDetails(event) {
        event.preventDefault();
    }

    function closeDialog(event) {
        event.preventDefault();
        const dialog = event.target.closest('dialog');
        dialog.close();
    }

    return {
        displayList,
        attachListeners
    }
})();

export {
    domDisplay
}