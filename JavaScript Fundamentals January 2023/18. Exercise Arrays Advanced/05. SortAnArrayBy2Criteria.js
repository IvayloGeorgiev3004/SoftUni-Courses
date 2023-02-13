function SortAnArrayBy2Criteria(array) {
    let initialLength = array[0]
    initialLength = initialLength.length
    let lengthCheck = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i].length !== initialLength) {
            lengthCheck = false
        }
    }

    if (lengthCheck === true) {
        array.sort((a, b,) => a.length - b.length);
    } else {
        array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        array.sort((a, b,) => a.length - b.length);
    }

    console.log(array.join("\n"))
}
SortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default'])
