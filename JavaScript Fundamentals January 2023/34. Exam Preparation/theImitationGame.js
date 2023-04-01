function theImitationGame(array) {
    let message = array.shift();

    for (let line of array) {
        let tokens = line.split("|")
        let command = tokens[0]
        switch (command) {
            case "ChangeAll": {
                let substrToReplace = tokens[1];
                let replacement = tokens[2];
                message = message.split(substrToReplace).join(replacement);
                // Може да използваме и този метод
                // while(message.includes(substrToReplace)){
                //     message = message.replace(substrToReplace, replacement)
                // }
                break;
            }
            case "Insert": {
                let index = Number(tokens[1]);
                let substrToInsert = tokens[2];
                message = message.substring(0, index) + `${substrToInsert}` + message.substring(index, message.length)
                break;
            }
            case "Move": {
                let indexesToMove = Number(tokens[1])
                let lettersToMove = message.substring(0, indexesToMove)
                message = message.substring(indexesToMove, message.length) + lettersToMove;
                break;
            }
            case "Decode": {
                return console.log(`The decrypted message is: ${message}`)
            }
        }
    }

}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])