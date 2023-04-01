function emojiDetector(array) {
    let string = array.shift();
    let thresholdRegex = /(?<numbers>\d)/g;
    let coolThreshold = string.match(thresholdRegex).map(Number)

    coolThreshold = coolThreshold.reduce((a, b) => a * b)
    console.log(`Cool threshold: ${coolThreshold}`)

    let emojiRegex = /(?<emoji>(?<separator>[:*]{2})[A-Z]{1}[a-z]{2,}\k<separator>)/g
    let totalMatches = string.match(emojiRegex).length;
    let matches = emojiRegex.exec(string);
    let coolMatches = [];
    let totalAsciiNum = 0;
    while (matches !== null) {
        for (let i = 0; i < matches.groups.emoji.length; i++) {
            let char = matches.groups.emoji[i]
            let asciiNum = char.charCodeAt(0)
            totalAsciiNum += asciiNum
        }
        if (totalAsciiNum >= coolThreshold) {
            coolMatches.push(matches.groups.emoji)
            totalAsciiNum = 0;
        }
        matches = emojiRegex.exec(string);
    }
    console.log(`${totalMatches} emojis found in the text. The cool ones are:`)
    coolMatches.forEach(element => {
        console.log(element)
    })
}
emojiDetector(["**Tigers****Tigers**,2,2,2,2,2"])