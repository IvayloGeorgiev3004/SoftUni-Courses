function numberManipulations(inputNumber, att1, att2, att3, att4, att5) {
    let number = Number(inputNumber);
    let commandsArray = []
    commandsArray.push(att1);
    commandsArray.push(att2);
    commandsArray.push(att3);
    commandsArray.push(att4);
    commandsArray.push(att5);

    for (let i = 0; i < commandsArray.length; i++) {
        let currentCommand = commandsArray[i]
        switch (currentCommand) {

            case 'chop': number /= 2; break; // divide number by 2
            case 'dice': number = Math.sqrt(number); break; //square root of a number
            case 'spice': number += 1; break; //add 1 to the number
            case 'bake': number *= 3; break; //multiply number by 3
            case 'fillet': number *= 0.80; break; //subtract 20% from the number
        }
        console.log(number)
    }

}
numberManipulations('9', 'dice', 'spice', 'chop', 'bake', 'fillet')