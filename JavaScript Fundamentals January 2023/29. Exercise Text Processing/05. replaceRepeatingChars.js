function replaceRepeatingChars(string) {
    let counter = 0;
    let currentChar = string[0]
    
    for (let i = 0; i < string.length; i++) {
        
        if (currentChar === string[i]) {
            counter++
        } else {
            for (let i = 0; i < counter-1; i++) {
                string = string.replace(currentChar,"")
            }
            currentChar = string[i]
            counter = 0;
        }
    }
    debugger
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')