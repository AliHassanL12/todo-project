const domData = (function() {
    function getIDFromEvent(event) {
        const expandButton = event.target;
        const todoContainer = expandButton.closest('.todo-container');
        const id = todoContainer.dataset.id;
        return id;
    }

    return {
        getIDFromEvent
    }
})();

export {
    domData
}