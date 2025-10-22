import { controller } from "./controller";
import { domData } from "./domDataRetriever";
import { listener } from "./domListeners";
import { domDialog } from "./domDialog";
import { colorPicker } from "./colorPicker";
const domDisplay = (function() {
    function displayList(list) {
        for (const todo of list) {
            displayTodo(todo);
        }
    }

    function clearMainContentDOM() {
        const mainContent = document.querySelector('.todo-main-content');
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
    }

    function addToDOMList(name) {
        const ul = document.querySelector('.project-list');
        const li = document.createElement('li');
        const delButton = document.createElement('button');
        
        delButton.textContent = 'Delete'
        li.textContent = name;
        li.className = 'project-list-item';
        li.dataset.project = name;

        listener.attachListener(li, switchProjects);
        listener.attachListener(delButton, deleteProject);
        li.appendChild(delButton);
        ul.appendChild(li);
    }

    function switchProjects(event) {
        event.stopPropagation();
        const projectName = event.target.dataset.project;
        controller.switchProjects(projectName);
    }

    function displayTodo(todo) {
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

        listener.attachListener(expandButton, domDialog.expandTodo)
        listener.attachListener(editDetailsButton, domDialog.editDetails);
        listener.attachListener(removeButton, controller.removeTodo);
        
        todoContainer.dataset.project = todo.getAssignedProject();
        todoContainer.dataset.id = todo.getID();
        todoContainer.style.borderLeft = '3px solid ' + colorPicker.returnColor(todo.details.priority);

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

    function removeTodoFromDom(id) {
        const todo = document.querySelector(`[data-id="${id}"]`);
        todo.remove();
    }

    function deleteProject(event) {
        event.stopPropagation();
        const parentElement = event.target.parentElement;
        const projectName = parentElement.textContent;
        parentElement.remove();
        controller.removeProject(projectName);
    }

    function initialiseDefault(event) {
        const home = event.target;
        listener.attachListener(home, switchProjects);
    }

    function setTitle(name) {
        const h1 = document.querySelector('.title');
        h1.textContent = name;
    }

    return {
        displayList,
        clearMainContentDOM,
        addToDOMList,
        switchProjects,
        displayTodo,
        removeTodoFromDom,
        deleteProject,
        initialiseDefault,
        setTitle
    }
})();

export {
    domDisplay
}