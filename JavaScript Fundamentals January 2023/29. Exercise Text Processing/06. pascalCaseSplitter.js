function pascalCaseSplitter(string) {
    let finalWord = ""
    let upperCaseChar = ""
    let count = 0
    let totalCount = 0;
    for (let char of string) {

        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            // upperCaseChar = char
            finalWord += char
            count = 0;
            totalCount++

        } else {
            count++
        }

        while (count !== 0) {
            finalWord += char
            count--
        }
        if (totalCount > 1) {
            totalCount = 1
            finalWord = finalWord.substring(0, finalWord.length - 1)
            let word = ", "
            finalWord += word
            finalWord += char
        }

    }
    console.log(finalWord)
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')