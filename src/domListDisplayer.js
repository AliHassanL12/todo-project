const domDisplay = (function() {
    function displayList(list) {
        for (const todo of list) {
            const mainContent = document.querySelector('.main-content');
            const todoContainer = document.createElement('div');
            const title = document.createElement('span');
            const dueDate = document.createElement('span');

            title.textContent = todo.title;
            dueDate.textContent = todo.dueDate;

            mainContent.appendChild(todoContainer);
            todoContainer.appendChild(title);
            todoContainer.appendChild(dueDate);
        }
    }
    return {
        displayList
    }
})();

export {
    domDisplay
}