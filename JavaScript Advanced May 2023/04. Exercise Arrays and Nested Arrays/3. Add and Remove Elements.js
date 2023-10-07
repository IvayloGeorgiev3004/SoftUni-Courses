function addAndRemoveElements(arrayOfCommands) {
    let resultsArray = [];
    let currentNumber = 1;

    for (let command of arrayOfCommands) {
        switch (command) {
            case `add`: resultsArray.push(currentNumber)
                break;
            case `remove`: resultsArray.pop()
                break;
        }
        currentNumber++
    }
    resultsArray.length > 0 ? console.log(resultsArray.join('\n')) : console.log('Empty')

}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])