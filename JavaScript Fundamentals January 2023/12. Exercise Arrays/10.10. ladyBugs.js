function ladyBugs(array) {
    let fieldSize = array[0];
    let bugsStartPositions = array.slice(1, 2).join(" ").split(" ");
    let bugsCommands = array.slice(2);
    let startingFiled = [];

    for (let i = 0; i < fieldSize; i++) {
        startingFiled.push(0);
    }

    for (let bugsPositions of bugsStartPositions) {
        if (bugsPositions < 0 || bugsPositions >= fieldSize || bugsPositions === "") {
            continue;
        }
        startingFiled[Number(bugsPositions)] = 1;
    }

    for (let commands of bugsCommands) {
        let bugsBuffCommands = commands.split(" ")

        let bugFlyFromIndex = Number(bugsBuffCommands[0]);
        let bugFlyDirection = bugsBuffCommands[1];
        let bugFlyLength = Number(bugsBuffCommands[2]);

        if (bugFlyFromIndex < 0 || bugFlyFromIndex >= fieldSize || startingFiled[(bugFlyFromIndex)] !== 1) {
            continue;
        }
        if (bugFlyLength + bugFlyFromIndex >= fieldSize) {
            startingFiled[bugFlyFromIndex] = 0
            debugger
            continue;
        }
        
    }

    console.log(startingFiled.join(" "))

}
ladyBugs([3, '0 1',
    '1 right 2',
    '10 left 1'])

/* function testing (array) {
    let newArray = array[0].split("|")
    for (let rooms of newArray){
        let commands = rooms.split(" ")
            let command = commands[0]
            let value = Number(commands[1])
            
    }
    
    
}
testing(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]) */