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
        if (bugFlyLength >= fieldSize) {
            startingFiled[bugFlyFromIndex] = 0
            continue;
        }
        if (bugFlyDirection === "left" && bugFlyLength < 0) {
            bugFlyDirection = "right"
            bugFlyLength = Math.abs(bugFlyLength)
        } else if (bugFlyDirection === "right" && bugFlyLength < 0) {
            bugFlyDirection = "left"
            bugFlyLength = Math.abs(bugFlyLength)
        }
        switch (bugFlyDirection) {
            case "right":
                startingFiled[bugFlyFromIndex] = 0
                while (bugFlyFromIndex < fieldSize) {
                    bugFlyFromIndex += bugFlyLength
                    if (startingFiled[bugFlyFromIndex] === 0) {
                        startingFiled[bugFlyFromIndex] = 1
                        break;
                    }
                }

                break;
            case "left":
                startingFiled[bugFlyFromIndex] = 0
                while (bugFlyFromIndex >= 0) {
                    bugFlyFromIndex -= bugFlyLength
                    if (startingFiled[bugFlyFromIndex] === 0) {
                        startingFiled[bugFlyFromIndex] = 1
                        break;
                    }
                }
                break;
        }

    }

    console.log(startingFiled.join(" "))

}
ladyBugs([5, '3',
    '3 left 2',
    '1 left -2'])