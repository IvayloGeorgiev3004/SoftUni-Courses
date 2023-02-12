function arrayManipulations(array) {
    let arrayOfCommands = array.slice(1, array.length)
    let numberArray = array[0].split(" ").map(Number)
    for (let actions of arrayOfCommands) {
        let command = actions.split(" ")
        let manipulation = command[0]
        let action = Number(command[1])
        switch (manipulation) {
            case "Add": numberArray.push(action); break;
            case "Remove": numberArray = numberArray.filter(a => a !== action); break;
            case "RemoveAt": numberArray.splice(action, 1); break;
            case "Insert": let atIndex = Number(command[2]);
                numberArray.splice(atIndex, 0, action); break;
        }
    }
    return numberArray.join(" ")
}
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])

///////////////////////////////////////////////////////////////////////////////

//     function arrayManipulations(array) {
// let testArray2 = array
//                 .shift()
//                 .split(` `)
//                 .map(Number)

//         let arrayOfCommands = array.slice(1, array.length)
//         let numberArray = array[0].split(" ").map(a => Number(a))
//         for (let actions of arrayOfCommands) {
//             let command = actions.split(" ")
//             let manipulation = command[0]
//             let action = Number(command[1])
//             switch (manipulation) {
//                 case "Add": numberArray.push(action); break;
//                 case "Remove": numberArray = numberArray.filter(a => a !== action); break;
//                 case "RemoveAt": numberArray.splice(action, 1); break;
//                 case "Insert": let atIndex = Number(command[2]);
//                     numberArray.splice(atIndex, 0, action); break;
//             }
//         }
//         return numberArray.join(" ")
//     }
//     arrayManipulations(['6 12 2 65 6 42',
//         'Add 8',
//         'Remove 12',
//         'RemoveAt 3',
//         'Insert 6 2'])
    