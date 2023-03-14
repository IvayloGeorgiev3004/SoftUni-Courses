function wordsTracker(array) {
    let neededWords = array.shift().split(" ")
    let wordsObj = {}
    let counter = 0;
    neededWords.forEach(element => wordsObj[element] = counter)


    array.forEach(element => {
        let word = element.split(" ");
        if (wordsObj.hasOwnProperty(word)) {
            counter = wordsObj[word];
            counter++;
            wordsObj[word] = counter;
        }
    });
    let sorted = Object.entries(wordsObj).sort((value, value2) => {
        return value2[1] - value[1]
    })
    sorted.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`)
    })
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])