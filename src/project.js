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

    return {
        addToList,
        getList,
        getProjectName
    }
}

export { createProject }