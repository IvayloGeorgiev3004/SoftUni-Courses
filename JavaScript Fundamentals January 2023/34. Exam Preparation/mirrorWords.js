function mirrorWords(arrayString) {
    let string = arrayString.shift()
    let regex = /(?<word1>(?<separator>[#@])(?<word>[A-Za-z]{3,})\k<separator>)\k<separator>(?<word2>[A-Za-z]{3,})/g;
    let resultArr = string.match(regex);
    let finalWordsArray = [];

    if (resultArr === null) {
        console.log("No word pairs found!")
    } else {
        console.log(`${resultArr.length} word pairs found!`)

        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i].includes("#")) {
                let word1 = resultArr[i].split("#")[1];
                let word2 = resultArr[i].split("#")[3];
                let testWord = Array.from(word2).reverse().join("")
                if (word1 === testWord) {
                    let match = `${word1} <=> ${word2}`
                    finalWordsArray.push(match)
                }
            } else if (resultArr[i].includes("@")) {
                let word1 = resultArr[i].split("@")[1];
                let word2 = resultArr[i].split("@")[3];
                let testWord = Array.from(word2).reverse().join("")
                if (word1 === testWord) {
                    let match = `${word1} <=> ${word2}`
                    finalWordsArray.push(match)
                }

            }

        }
    }

    if (finalWordsArray.length === 0) {
        console.log("No mirror words!")
    } else {
        console.log(`The mirror words are:\n${finalWordsArray.join(", ")}`)
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])