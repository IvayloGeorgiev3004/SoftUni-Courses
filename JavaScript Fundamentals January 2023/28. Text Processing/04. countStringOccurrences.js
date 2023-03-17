function countStringOccurrences(sentence, word) {
    let counter = 0;
    let sentenceToWords = sentence.split(" ")
    sentenceToWords.forEach(element => {
        if (element === word) {
            counter++
        }
    });
    console.log(counter)
}
countStringOccurrences('This is a word and it also is a sentence',
    'is')