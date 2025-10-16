function createProject(name) {

    let list = [];

    function addToList(todo) {
        list.push(todo);
    }

    function getList() {
        return list;
    }

    function getProjectName() {
        return name;
    }

    function removeTodo(id) {
        const isTodoHere = (todo) => todo.getID() === id;
        const index = list.findIndex(isTodoHere);
        list.splice(index, 1);
    }

    return {
        addToList,
        getList,
        getProjectName,
        removeTodo
    }
}

export { createProject }