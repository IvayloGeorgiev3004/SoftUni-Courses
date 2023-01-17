function sequence2kPlus1(input) {
    let num = Number(input[0]);

    let startingNumber = 0;
    let previousNumber = 0;

    while (previousNumber < num) {
        startingNumber = (startingNumber * 2) + 1;
        previousNumber += startingNumber
        console.log(startingNumber)

    }

}
sequence2kPlus1(["31"])