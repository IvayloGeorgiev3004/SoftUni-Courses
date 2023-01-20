function rightPlace(string, char, string2) {
    let newString = string.replace("_", char)

    if (newString === string2) {
        console.log('Matched')
    } else {
        console.log('Not Matched')
    }

}
rightPlace('Str_ng', 'i', 'String')


function rightPlace2(string, char, string2) {

    let newString = ""
    for (let i = 0; i < string.length; i++) {
        let newChar = string[i]

        if (newChar === "_") {
            newChar = char
        }
        newString += newChar;
    }

    console.log(newString === string2 ? "Matched" : "Not Matched")
}
rightPlace2('Str_ng', 'i',

    'String')