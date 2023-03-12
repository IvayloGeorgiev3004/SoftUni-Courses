function wordOccurrences(array) {
    let wordsMap = new Map();

    array.forEach(element => {
        if (!wordsMap.has(element)) {
            let counter = 1;
            wordsMap.set(element, counter)
        } else {
            let counter = wordsMap.get(element)
            counter++
            wordsMap.set(element, counter)
        }

    });
    wordsMap = [...wordsMap.entries()].sort(([word, count], [word2, count2]) => count2 - count)

    for (let words of wordsMap) {
        let [word, count] = words.join(",").split(",")
        console.log(`${word} -> ${count} times`)
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"])