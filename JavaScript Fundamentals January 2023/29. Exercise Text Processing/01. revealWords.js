function revealWords(word, sentence) {
    let words = word.split(", ")
    words.forEach(element => {
        let wordLength = element.length
        let searchForWord = "*".repeat(wordLength)
        sentence = sentence.replace(searchForWord, element)
    })
    console.log(sentence)
}
revealWords('great',
    'softuni is ***** place for learning new programming languages')