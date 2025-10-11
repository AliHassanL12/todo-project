const controller = (function () {
    function addTodo(project, todo) {
        project.addToList(todo);
    }

    return {
        addTodo
    }
})();

export {
    controller
}