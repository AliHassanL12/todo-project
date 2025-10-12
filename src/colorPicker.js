const colorPicker = (function() {
    let colors = [];

    function createColorFromPriority(priority, color) {
        const colorObj = createColor(priority, color);
        addToColors(colorObj);
    }

    function addToColors(colorObj) {
        colors.push(colorObj);
    }

    function returnColor(taskPriority) {
        for (let i = 0; i < colors.length; i++) {
            const colorsPriority = colors[i].priority;
            if (colorsPriority == taskPriority) {
                return colors[i].color;
            }
        } 
    }

    return {
        createColorFromPriority,
        returnColor
    }
})();

function createColor(priority, color) {
    return {
        priority,
        color
    }
}

colorPicker.createColorFromPriority('high', 'red');
colorPicker.createColorFromPriority('medium', 'orange');
colorPicker.createColorFromPriority('low', 'green');

export {
    colorPicker
}