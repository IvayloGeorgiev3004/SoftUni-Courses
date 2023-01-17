function vowelsSum2(input) {
    let text = input[0];

    let currentChar = 0;
    let sum = 0;
    for (i = 0; i < text.length; i++) {
        currentChar = text[i]
        if (currentChar === "a") {
            sum += 1;
        } else if (currentChar === "e") {
            sum += 2;
        } else if (currentChar === "i") {
            sum += 3;
        } else if (currentChar === "o") {
            sum += 4;
        } else if (currentChar === "u") {
            sum += 5;
        }
    }

    console.log(sum)
}
vowelsSum2(["bamboo"])