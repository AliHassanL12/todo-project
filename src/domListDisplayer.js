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

            expandButton.className = 'expand-button';
            todoContainer.className = 'todo-container';
            rightContainer.className = 'right-sub-container';

            todoContainer.style.borderLeft = '3px solid ' + controller.returnColor(todo.priority);

            title.textContent = todo.title;
            dueDate.textContent = todo.dueDate;
            expandButton.textContent = 'View Details';

            mainContent.appendChild(todoContainer);
            todoContainer.appendChild(title);
            todoContainer.appendChild(rightContainer);
            rightContainer.appendChild(dueDate);
            rightContainer.appendChild(expandButton);
        }
    }
    return {
        displayList
    }
})();

export {
    domDisplay
}