function sumOfNumbersWhile(input) {
    let number = Number(input[0]);
    let index = 1;
    let sumOfNumbers = Number(input[index]);
    let sum = 0;

    while (index < input.length) {
        sum += sumOfNumbers
        index++
        sumOfNumbers = Number(input[index]);
    }

    console.log(sum)
}
sumOfNumbersWhile(["100", "10", "20", "30", "40"])