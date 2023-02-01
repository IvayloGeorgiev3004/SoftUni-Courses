function ladyBugs(array) {
    let fieldSize = array[0]
    let bugsInitialPosition = array[1]
    let bugsStartingPositionArray = []
    let splicedBugs = []
    let initialFieldArray = []
    let travelToIndex = []
    let moveDirection = []
    let travelFromIndex = []

    for (let i = 0; i < fieldSize; i++) {
        initialFieldArray.push(0)
    }
    splicedBugs = bugsInitialPosition.split(" ")
    for (let j = 0; j < bugsInitialPosition.length; j++) {
       if (j === Number(bugsInitialPosition[j])) {
        initialFieldArray[j] = 1;
       } else {
        initialFieldArray[j] = 0
       }
    }
    for (let k = 2; k < array.length; k++) {
        let movesCommand = array[k].split(" ")
        let actions = [travelFromIndex, moveDirection, travelToIndex] = movesCommand;
        travelFromIndex = Number(travelFromIndex);
        travelToIndex = Number(travelToIndex);

        if (travelFromIndex < 0 || travelFromIndex >= fieldSize || initialFieldArray[travelFromIndex] !== 1) {
            continue;
        }
        if (travelToIndex >= fieldSize) {
            continue;
        }
        switch (moveDirection) {
            case "right":
                if (travelToIndex >= 0) {
                    initialFieldArray[travelFromIndex] = 0
                    for (let m = travelFromIndex; m < travelToIndex; m++) {
                        if (travelToIndex >= initialFieldArray.length) {
                            break;
                        }
                        if (initialFieldArray[travelToIndex] === 0) {
                            initialFieldArray[travelToIndex] = 1
                        } else {
                            travelToIndex++
                            continue;
                        }
                    }
                } else if (travelToIndex < 0) {
                    moveDirection = "left"
                    travelToIndex = Math.abs(travelToIndex)
                    initialFieldArray[travelFromIndex] = 0
                    for (let m = travelFromIndex; m >= 0; m--) {
                        if (travelToIndex >= initialFieldArray.length) {
                            break;
                        }
                        if (initialFieldArray[travelToIndex] === 0) {
                            initialFieldArray[travelToIndex] = 1
                            break;
                        } else {
                            travelToIndex++
                            continue;
                        }
                    }

                }
            case "left":
            // TO DO

        }


    }
    console.log(initialFieldArray.join(" "))
}
ladyBugs(
    [3, '0 1',
        '2 right -1',
        '2 right 1'])


/* function ladybugs(array) {
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
    [3, '0 1',
        '0 right 1',
        '2 right 1'])
 */




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
solve([3, '0 1',
    '0 right 1',
    '2 right 1']) */