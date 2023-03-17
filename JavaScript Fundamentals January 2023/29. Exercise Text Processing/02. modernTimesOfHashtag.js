function modernTimesOfHashtag(sentence) {
    let correctWord = ""
    let arrFromSentence = sentence.split(" ");
    arrFromSentence.forEach(element => {
        if (element.includes("#") && element.length > 1) {
            for (let char of element) {
                if (char !== "#" && (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
                    element = element.replace("#", "")
                    correctWord += char
                    if (!element.length === correctWord.length) {
                        break;
                    }
                }
            }
            if (correctWord.length === element.length) {
                console.log(correctWord)
            }
            correctWord = ""
        }
    })
}
modernTimesOfHashtag('The symbol # is known #variously in English-speaking #reg6ions as the #number7 sign')