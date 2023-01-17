function sumPrimeOrNonPrime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;
    let index = 0;
    let currentIndex = input[index]
    let currentNumber = 0;

    while (currentIndex !== "stop") {
        let counter = 0;
        currentNumber = Number(input[index]);
        index++
        currentIndex = input[index]
        if (currentNumber < 0) {
            console.log(`Number is negative.`)
            continue;
        }
        for (let i = 2; i <= currentNumber; i++) {
            if (currentNumber % i === 0) {
                counter++;
            }
        }
        if (counter == 1) {
            sumPrime += currentNumber;
        } else {
            sumNonPrime += currentNumber;
        }


    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
sumPrimeOrNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])