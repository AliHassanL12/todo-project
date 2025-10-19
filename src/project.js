function createProject(name, customList = null) {
    let list; 
    if (customList) list = customList
    else list = [];

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

    function setList(newList) {
        list = newList;
    } 

    function storageObject() {
        return {
            name,
            list
        }
    }

    return {
        addToList,
        getList,
        getProjectName,
        removeTodo,
        storageObject,
        setList
    }
}

export { createProject }