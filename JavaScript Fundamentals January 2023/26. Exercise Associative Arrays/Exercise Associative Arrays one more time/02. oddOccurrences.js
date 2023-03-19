function oddOccurrences(string) {
    string = string.toLowerCase()
    let stringArr = string.split(" ")
    let objOfWords = {}
    for (let i = 0; i < stringArr.length; i++) {
        let currentWord = stringArr[i]
        if (!objOfWords.hasOwnProperty()) {
            objOfWords[currentWord] = 0
        }
    }

    for (let word of stringArr) {
        if (objOfWords.hasOwnProperty(word)) {
            let currentCount = objOfWords[word]
            currentCount++
            objOfWords[word] = currentCount
        }
    }
    let sorted = Object.entries(objOfWords).filter(element => element[1] % 2 == 1)

    let finalResult = []
    sorted.forEach(element => finalResult.push(element[0]))
    console.log(finalResult.join(" "))
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')