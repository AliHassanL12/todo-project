import { controller } from "./controller";
const domDisplay = (function() {
    function displayList(list) {
        for (const todo of list) {
            const mainContent = document.querySelector('.todo-main-content');
            const todoContainer = document.createElement('div');
            const rightContainer = document.createElement('div');
            const title = document.createElement('span');
            const dueDate = document.createElement('span');
            const expandButton = document.createElement('button');
            const editDetailsButton = document.createElement('button');
            const removeButton = document.createElement('button');

            editDetailsButton.className = 'edit-button';
            expandButton.className = 'expand-button';
            removeButton.className = 'remove-button';
            todoContainer.className = 'todo-container';
            rightContainer.className = 'right-sub-container';

            todoContainer.dataset.project = controller.getTodoProject(todo);
            todoContainer.dataset.id = controller.getTodoID(todo);
            todoContainer.style.borderLeft = '3px solid ' + controller.returnColor(todo.details.priority);

            title.textContent = todo.details.title;
            dueDate.textContent = todo.details.dueDate;
            expandButton.textContent = 'View Details';
            editDetailsButton.textContent = 'Edit Details';
            removeButton.textContent = 'Delete';

            mainContent.appendChild(todoContainer);
            todoContainer.appendChild(title);
            todoContainer.appendChild(rightContainer);
            rightContainer.appendChild(dueDate);
            rightContainer.appendChild(editDetailsButton);
            rightContainer.appendChild(expandButton);
            rightContainer.appendChild(removeButton);
        }
    }

    function displayDetails(event) {
        const id = returnIDsFromEvent(event);

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

    function returnIDsFromEvent(event) {
        const expandButton = event.target;
        const todoContainer = expandButton.closest('.todo-container');
        const id = todoContainer.dataset.id;
        return id;
    }

    function editDetails(event) {
        const dialog = document.querySelector('.edit-details')
        const id = returnIDsFromEvent(event);

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

    function closeDialog(event) {
        event.preventDefault();
        const dialog = event.target.closest('dialog');
        dialog.close();
    }

    function clearMainContentDOM() {
        const mainContent = document.querySelector('.todo-main-content');
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
    }

    function addTodo() {
        const dialog = document.querySelector('.edit-details');
        const form = document.querySelector('form');
        form.reset();
        dialog.showModal();
    }

    function removeTodo(event) {
        const id = returnIDsFromEvent(event)
        controller.removeTodo(id);
    }

    function addProject() {
        const dialog = document.querySelector('.project');
        dialog.showModal();
    }

    function submitNewProject(event) {
        event.preventDefault();
        const form = document.querySelector('.project-form');
        const name = document.querySelector('#name').value;
        controller.createNewProject(name);
        const projectListItems = document.querySelectorAll('.project-list-item');
        projectListItems.forEach((projectListItem) => {
            projectListItem.addEventListener('click', switchProjects);
        })
        closeDialog(event);
        form.reset();
    }

    function addToDOMList(name) {
        const ul = document.querySelector('.project-list');
        const li = document.createElement('li');

        li.textContent = name;
        li.className = 'project-list-item';

        ul.appendChild(li);
    }

    function switchProjects(event) {
        const projectName = event.target.textContent;
        controller.switchProjects(projectName);
    }
    return {
        displayList,
        clearMainContentDOM,
        addToDOMList,
        displayDetails,
        editDetails,
        removeTodo, 
        switchProjects,
        addTodo,
        closeDialog,
        submitDetails,
        addProject,
        submitNewProject
    }
})();

export {
    domDisplay
}