function createProject(name) {

    let list = [];

    function addToList(todo) {
        list.push(todo);
    }

    function getList() {
        return list;
    }

    return {
        addToList,
        getList
    }
}

export { createProject }