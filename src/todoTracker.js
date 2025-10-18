const todoTracker = (function() {
    let currentTodo = null;

    function setCurrentTodo(todo) {
        currentTodo = todo;
    }

    function getCurrentTodo() {
        return currentTodo;
    }

    return {
        setCurrentTodo,
        getCurrentTodo
    }
})();

export {
    todoTracker
}