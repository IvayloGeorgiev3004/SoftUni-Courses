function wordsTracker(array) {
    let wordsToSearch = array.shift().split(" ");
    let counter = 0;
    let wordsObj = {};
    wordsToSearch.forEach(element => {
        wordsObj[element] = counter;
    });

    for (let word of array) {
        if (wordsObj.hasOwnProperty(word)) {
            let currentCounter = wordsObj[word]
            currentCounter++
            wordsObj[word] = currentCounter
        }
    }
    let sorted = Object.entries(wordsObj).sort(([key, value], [key2, value2]) => {
        return value2 - value

    })
    sorted.forEach(element => console.log(`${element[0]} - ${element[1]}`))

}
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])