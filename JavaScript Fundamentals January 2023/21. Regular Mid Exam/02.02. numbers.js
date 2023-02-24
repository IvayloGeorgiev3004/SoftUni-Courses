function numbers(array) {
    let workingArray = array.shift().split(" ").map(Number)

    for (let commands of array) {
        commands = commands.split(" ")
        let command = commands[0]
        switch (command) {
            case "Add": let valueToPush = Number(commands[1]);
                addAtTheEnd(valueToPush, workingArray); break;
            case "Remove": let valueToRemove = Number(commands[1]);
                removeValue(valueToRemove, workingArray); break;
            case "Replace": let valueToReplace = Number(commands[1]);
                let valueToAdd = Number(commands[2]);
                replaceValue(valueToReplace, valueToAdd, workingArray); break;
            case "Collapse": let number = Number(commands[1]);
            workingArray = workingArray.filter(a => a > number); break;
            case "Finish": console.log(workingArray.join(" "))
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

    function replaceValue(valueToReplace, valueToAdd, arr) {
        if (arr.indexOf(valueToReplace) !== -1) {
            let indexToReplace = arr.indexOf(valueToReplace);
            arr.splice(indexToReplace, 1, valueToAdd)
        }
    }

}
numbers(["1 4 5 19",

"Add 1",

"Remove 4",

"Finish"])