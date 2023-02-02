function ladyBugs(array) {
    let fieldSize = array[0]
    let workingArray = array.slice()
    let newWorkingArray = workingArray.slice(2)
    let bugsInitialPosition = array[1]
    let leftIndexes = 0;
    let rightIndexes = 0;
    let splicedBugs = ""
    let initialFieldArray = []
    let travelToIndex = []
    let moveDirection = []
    let travelFromIndex = []

    for (let i = 0; i < fieldSize; i++) {
        if (fieldSize <= 0) {
            break;
        }
        initialFieldArray.push(0)
    }
    splicedBugs = bugsInitialPosition.split(" ")

    for (const bugsInitialField of splicedBugs) {
        let currentBugPosition = Number(bugsInitialField)

        if (bugsInitialField === "") {
            continue;
        }
        if (currentBugPosition < 0 || currentBugPosition >= fieldSize) {
            continue;
        }
        initialFieldArray[currentBugPosition] = 1;


    }
    for (let k = 0; k < newWorkingArray.length; k++) {
        let movesCommand = newWorkingArray[k].split(" ")
        let actions = [travelFromIndex, moveDirection, travelToIndex] = movesCommand;
        travelFromIndex = Number(travelFromIndex);
        travelToIndex = Number(travelToIndex);

        if (travelFromIndex < 0 || travelFromIndex >= fieldSize || initialFieldArray[travelFromIndex] !== 1) {
            continue;
        }
        if (travelToIndex >= fieldSize) {
            continue;
        }
        if (travelToIndex < 0 && moveDirection === "left") {
            moveDirection = "right"
        } else if (travelToIndex < 0 && moveDirection === "right") {
            moveDirection = "left"
        }
        switch (moveDirection) {
            case "right":
                if (travelToIndex >= 0) {
                    rightIndexes = travelFromIndex + travelToIndex;
                    initialFieldArray[travelFromIndex] = 0
                    for (let m = travelFromIndex; m < initialFieldArray.length; m++) {
                        if (travelToIndex >= initialFieldArray.length) {
                            break;
                        }
                        if (initialFieldArray[rightIndexes] === 0) {
                            initialFieldArray[rightIndexes] = 1
                            break;
                        } else {
                            rightIndexes += rightIndexes
                            continue;
                        }
                    }
                } else if (travelToIndex < 0) {
                    travelToIndex = Math.abs(travelToIndex)
                    initialFieldArray[travelFromIndex] = 0
                    for (let m = travelFromIndex; m >= 0; m++) {
                        rightIndexes = travelFromIndex + travelToIndex;
                        if (travelToIndex >= initialFieldArray.length) {
                            break;
                        }
                        if (initialFieldArray[rightIndexes] === 0) {
                            initialFieldArray[rightIndexes] = 1
                            break;
                        } else {
                            travelToIndex += travelToIndex
                            travelFromIndex = travelToIndex;
                            continue;
                        }
                    }

                } break;
            case "left":
                if (travelToIndex >= 0) {
                    initialFieldArray[travelFromIndex] = 0;
                    for (let l = travelFromIndex; l >= 0; l--) {
                        leftIndexes = travelFromIndex - travelToIndex
                        if (initialFieldArray[leftIndexes] === 0) {
                            initialFieldArray[leftIndexes] = 1;
                            break;
                        } else {
                            travelFromIndex -= travelToIndex;
                            continue;
                        }
                    }
                } else if (travelToIndex < 0) {
                    travelToIndex = Math.abs(travelToIndex)
                    initialFieldArray[travelFromIndex] = 0
                    for (let m = travelFromIndex; m >= 0; m--) {
                        leftIndexes = travelFromIndex - travelToIndex;
                        if (travelToIndex >= initialFieldArray.length) {
                            break;
                        }
                        if (initialFieldArray[leftIndexes] === 0) {
                            initialFieldArray[leftIndexes] = 1
                            break;
                        } else {
                            travelToIndex++
                            continue;
                        }
                    }
                }
                break;

        }


    }
    console.log(initialFieldArray.join(" "))
}
ladyBugs(
    [100, '-2 -3 -4 12 32 89 6 1 12 32 89 6 1 12 32 1 1 11 1', '0 right 5','6 right 2','7 left 1','19 left 0','-12 left 12','0 left 0','12 right 0','32 right 120','89 left 260']

)


function ladybugs(array) {
    let workingArray = array.slice();
    let fieldSize = workingArray.shift();
    let bugsPosition = workingArray.shift().split(' ');
    let finalBugsArray = new Array(fieldSize).fill(0);

    for (const position of bugsPosition) {
        let currentBug = Number(position);
        if (currentBug < 0 || currentBug >= fieldSize) {
            continue;
        }
        finalBugsArray[currentBug] = 1;
    }

    for (let i = 0; i < workingArray.length; i++) {
        let [ladybugIndex, command, jumpLength] = workingArray[i].split(' ');

        ladybugIndex = Number(ladybugIndex);

        if (ladybugIndex < 0 || ladybugIndex >= finalBugsArray.length || finalBugsArray[ladybugIndex] !== 1) {
            continue;
        }

        // Free Position
        finalBugsArray[ladybugIndex] = 0;

        jumpLength = Number(jumpLength);

        if (command === 'left') {
            jumpLength = -jumpLength;
        }

        ladybugIndex += jumpLength;
        while (ladybugIndex >= 0 && ladybugIndex < finalBugsArray.length) {
            if (finalBugsArray[ladybugIndex] === 0) {
                finalBugsArray[ladybugIndex] = 1;
                break;
            }
            ladybugIndex += jumpLength;
        }
    }

    console.log(finalBugsArray.join(' '));
}
ladybugs(
    [100, '-2 -3 -4 12 32 89 6 1 12 32 89 6 1 12 32 1 1 11 1', '0 right 5','6 right 2','7 left 1','19 left 0','-12 left 12','0 left 0','12 right 0','32 right 120','89 left 260']

)





/* function solve(input) {
    let fieldSize = input[0];
    let ladybugPositions = input[1].split(' ').map(Number);

    // Create Field
    // let createField = [];
    // for (let f = 0; f < fieldSize; f++) {
    //     createField.push(0);
    // }
    let createField = new Array(fieldSize).fill(0);

    // Put the Ladybugs on the field (starting positions)
    // for (let s = 0; s < ladybugPositions.length; s++) {
    //     if (ladybugPositions[s] >= 0 && ladybugPositions[s] < fieldSize) {
    //         createField.splice(ladybugPositions[s], 1, 1);
    //     }
    // }
    ladybugPositions.forEach((i) => {
        if (i >= 0 && i < fieldSize) {
            createField[i] = 1;
        }
    });

    for (let i = 2; i < input.length; i++) {
        // create directions
        let command = input[i].split(' '); // split the current input into 3 parts
        // let direction = command[1]; // 1 - left or right
        // let travelFrom = Number(command[0]); // 2- starting position
        // let travelTo = Number(command[2]); // 3 - ending position
        let [travelFrom, direction, travelTo] = command;
        travelFrom = Number(travelFrom);
        travelTo = Number(travelTo);

        // if (travelFrom < 0 || travelFrom > fieldSize) {
        if (travelFrom < 0 || travelFrom >= fieldSize || createField[travelFrom] !== 1) {
            continue;
        }

        if (direction === 'right') {
            createField[travelFrom] = 0;
            let newIndex = travelFrom + travelTo;

            while (newIndex < fieldSize) {
                if (createField[newIndex] === 1) {
                    newIndex += travelTo;
                    continue;
                }
                createField[newIndex] = 1;
                break;
            }
        } else if (direction === 'left') {
            createField[travelFrom] = 0;
            let newIndex = travelFrom - travelTo;

            while (newIndex >= 0) {
                if (createField[newIndex] === 1) {
                    newIndex -= travelTo;
                    continue;
                }
                createField[newIndex] = 1;
                break;
            }
        }

        // negative steps reversal
        // if (travelTo < 0) {
        //     travelTo = Math.abs(travelTo);
        //     if (direction === "right") {
        //         direction = 'left';
        //     } else if (direction === "left") {
        //         direction = 'right';
        //     }
        // }
        // Move Right
        // if (direction === "right" && createField[travelFrom] === 1) {
        //     travelTo = travelFrom + travelTo;
        //     // first remove remove the bug 
        //     createField[travelFrom] = 0;
        //     // then if the spot is taken
        //     if (createField[travelTo] !== 0) {
        //         // fly until you find one
        //         for (let x = 0; x < fieldSize; x++) {
        //             if (createField[travelTo] !== 0) {
        //                 travelTo++
        //             }
        //             if (createField[travelTo] === 0) {
        //                 break;
        //             }
        //         }
        //     }
        //     // land on the free one
        //     if (createField[travelTo] === 0) {
        //         let ladybugIsMoving = createField.splice(travelTo, 1, 1);
        //     }
        //     // Move left
        // } 
        // else if (direction === "left" && createField[travelFrom] === 1) {
        //     travelTo = travelFrom - travelTo;
        //     // first remove remove the bug 
        //     createField[travelFrom] = 0;
        //     // if the spot is taken
        //     if (createField[travelTo] !== 0) {
        //         // fly until you find one
        //         for (let x = 0; x < fieldSize; x++) {
        //             if (createField[travelTo] !== 0) {
        //                 travelTo--;
        //             }
        //             if (createField[travelTo] === 0) {
        //                 break;
        //             }
        //         }
        //     }
        //     // land on the free one
        //     if (createField[travelTo] === 0) {
        //         let ladybugIsMoving = createField.splice(travelTo, 1, 1);
        //     }
        // }
    }

    console.log(createField.join(' '));
}
solve([5, '3',
    '3 left 2',
    '1 left -2']
) */