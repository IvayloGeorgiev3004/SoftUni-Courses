function numbers(array) {
    let workingArray = array.shift().split(" ").map(Number)

    for (let commands of array) {
        commands = commands.split(" ")
        let command = commands[0]
        switch (command) {
            case "Add": let valueToPush = Number(commands[1]);
                addAtTheEnd(valueToPush, workingArray); break;
            case "Remove": let valueToRemove = Number(commands[1]); debugger;
            removeValue(valueToRemove,workingArray); debugger;
            case "Replace":// TODO
            case "Collapse": // TODO
        }
    }

    function addAtTheEnd(value, array) {
        array.push(value);
    }

    function removeValue(valueToRemove2, arr) {
        if (arr.indexOf(valueToRemove2) !== -1) {
            let indexToRemove = arr.indexOf(valueToRemove2)
            arr.splice(indexToRemove, 1)
        }
    }
}
numbers((["1 4 5 19",

    "Add 1",

    "Remove 4",

    "Finish"]))