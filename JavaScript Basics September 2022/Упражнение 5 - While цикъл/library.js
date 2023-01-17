function library(input) {
    let neededBook = input[0];

    let index = 1;
    let bookCounter = 0;
    let currentInput = input[index];

    while (currentInput !== "No More Books") {
        if (currentInput !== neededBook) {
            bookCounter++;
        } else if (currentInput === neededBook) {
            console.log(`You checked ${bookCounter} books and found it.`)
            break;
        }
        index++
        currentInput = input[index];
    }
    if (currentInput === "No More Books") {
        console.log('The book you search is not here!')
        console.log(`You checked ${bookCounter} books.`);
    }

}
library(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])