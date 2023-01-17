function rightPlace(string, char, string2){
    let newString = string.replace("_", char)

    if (newString === string2){
        console.log('Matched')
    } else{
        console.log('Not Matched')
    }

}
rightPlace('Str_ng', 'i',

'String')