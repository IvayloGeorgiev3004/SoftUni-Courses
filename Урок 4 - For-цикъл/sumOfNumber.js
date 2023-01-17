function sumOfNumbers(input) {

    let num = String(input[0]);

    let sum = 0;
    let currentDigit = 0;
    for (let i = 0; i < num.length; i++) {
        currentDigit = Number(num[i]);
        sum += currentDigit;
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers((["1234"]))