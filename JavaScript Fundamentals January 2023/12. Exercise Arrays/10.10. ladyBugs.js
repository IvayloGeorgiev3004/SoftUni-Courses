function ladyBugs(array) {
    let fieldSize = array[0]
    let bugsStartPosition = array.slice(1, 2).join(" ").split(" ")
    let bugsCommands = array.slice(2)
    let startingFiled = []

    for (let i = 0; i < fieldSize; i++) {
        startingFiled.push(0)
    }

    for (let bugsPositions of bugsStartPosition) {
        let addBugsToField = bugsPositions
        if (addBugsToField < 0 || addBugsToField >= fieldSize || addBugsToField === "") {
            continue;
        }
        startingFiled[addBugsToField] = 1
    }

    debugger



}
ladyBugs([
    3, '1 0',
    '0 right 1',
    '2 right 1'])

/* function testing (array) {
    let newArray = array[0].split("|")
    for (let rooms of newArray){
        let commands = rooms.split(" ")
            let command = commands[0]
            let value = Number(commands[1])
            
    }
    
    
}
testing(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]) */