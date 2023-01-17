function accountBalance(input) {
    let index = 0;
    let data = input[index];
    let sum = 0;
    let totalSum = 0;

    while (data !== "NoMoreMoney") {

        sum = Number(input[index])

        if (sum <= 0) {
            console.log("Invalid operation!")
            break;
        }

        console.log("Increase: " + sum.toFixed(2))
        totalSum += sum
        index++
        data = input[index]



    }
    console.log("Total: " + totalSum.toFixed(2))
}
accountBalance(["5.51",

    "69.42",

    "100", "-110",

    "NoMoreMoney"])