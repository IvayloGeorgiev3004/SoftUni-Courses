function hardWord(array) {
    let letterString = array.shift()
    let finalLetter = letterString;
    let words = array.shift()
    // let sortedWords = words.sort((a, b) => a.length - b.length)
    let wordsObj = {}
    let currentWord = ""

    for (let word of words) {
        wordsObj[word.length] = word
    }

    for (let i = 0; i < letterString.length; i++) {
        if (letterString[i] === "_") {
            currentWord += letterString[i]
            if (letterString[i + 1] !== "_") {
                let length = currentWord.length
                finalLetter = finalLetter.replace(currentWord, wordsObj[length])
                currentWord = ""
            }
        }

    }
    console.log(finalLetter)
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])