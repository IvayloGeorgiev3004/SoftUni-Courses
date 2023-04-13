function emojiDectector(array) {
    let text = array.shift()
    let emojiRegex = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g
    let coolRegex = /\d/g;
    let coolTreshhold = text.match(coolRegex).map(Number).reduce((a, b) => a * b, 1);
    let counter = 0;
    let sum = 0;
    let coolEmojies = [];
    let matches = emojiRegex.exec(text);
    while (matches) {
        counter++
       
        let currentMatch = matches.groups.emoji;
        let sumOfChars = countAscii(currentMatch)
        if (sumOfChars > coolTreshhold) {
            coolEmojies.push(matches[0])
        }
        matches = emojiRegex.exec(text)
        sum = 0;
    }

    console.log(`Cool threshold: ${coolTreshhold}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    console.log(coolEmojies.join("\n"));

    function countAscii(word) {
        let text = word.split("")
        for (char of text) {
            sum += char.charCodeAt(0)
        }
        return sum;
    }

}
emojiDectector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log(`------------------------------------`)
emojiDectector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
console.log(`------------------------------------`)
emojiDectector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
