function streamOfLetters(input) {
    let currentWord = ""
    let cCounter = 0;
    let nCounter = 0;
    let oCounter = 0;
    let index = 0;
    let wordsCounter = 0;
    let currentInput = input[index];

    while (currentInput !== "End") {

        if (currentInput === "%" || currentInput === "!" || currentInput === "^" || currentInput === ")" || currentInput === "{" || currentInput === "/" || currentInput === "\\" || currentInput === "`" || currentInput === "&" || currentInput === "?" || currentInput === ">" || currentInput === "<" || currentInput === "@" || currentInput === "#" || currentInput === "*" || currentInput === "$" || currentInput === "+" || currentInput === "-" || currentInput === "=") {
            index++
            currentInput = input[index];
            continue;
        }



        if (currentInput === "n" || currentInput === "o" || currentInput === "c") {
            if (currentInput === "c" && cCounter >= 1) {
                currentWord += currentInput;
            } else if (currentInput === "n" && nCounter >= 1) {
                currentWord += currentInput;
            } else if (currentInput === "o" && oCounter >= 1) {
                currentWord += currentInput;
            }

        } else if (currentInput === "n" || currentInput === "o" || currentInput === "c" && cCounter < 1 && nCounter < 1 && oCounter < 1) {
            continue;
        } else {
            currentWord += currentInput;
        }

        if (currentInput === "n") {
            nCounter++
        } else if (currentInput === "o") {
            oCounter++
        } else if (currentInput === "c") {
            cCounter++
        }

        if (cCounter >= 1 && nCounter >= 1 && oCounter >= 1) {
            cCounter = 0;
            nCounter = 0;
            oCounter = 0;
            wordsCounter++
            currentWord += " "
            if (wordsCounter === 1) {
                finalWord = currentWord + "";
                wordsCounter = 0;
            }

        }
        index++
        currentInput = input[index];


    }
    console.log(finalWord)
}
streamOfLetters(['o',
    'S',
    '%',
    'o',
    'l',
    '^',
    'v',
    'e',
    'c',
    'n',
    '&',
    'm',
    'e',
    'c',
    'o',
    'n',
    'End'])