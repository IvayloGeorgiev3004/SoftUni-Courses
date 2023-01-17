function minNumber222(input) {
    let index = 0;
    let currentInput = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER

    while (currentInput !== "Stop") {
        if (minNumber > Number(currentInput)) {
            minNumber = Number(currentInput);
        }
        index++
        currentInput = input[index]
    }
    console.log(minNumber)
}
minNumber222(["100",

    "99",

    "80",

    "70",

    "Stop"])