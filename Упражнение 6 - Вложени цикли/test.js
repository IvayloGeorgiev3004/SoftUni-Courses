function sumPrimeNonPrime(input) {
    let start = -2147483648;
    let end = 2147483648;
    let number = 0;
    let sumPrime = 0;
    let sumPrime2 = 0;
    let sumNonPrime = 0
    let sumNonPrime2 = 0;
    let data = "";

    for (let i = 0; i < input.length; i++) {
        data = input[i];

        if (data === "stop") {
            break;
        } else {
            number = Number(input[i]);
        }

        while (number > start && number < end) {
            if (number < 0) {
                console.log(`Number is negative.`);
                break;
            } else if (number === 1) {
                sumNonPrime2 = sumNonPrime2 + number;
                break;
            } else if (number === 0) {
                sumNonPrime = number;
            }

            for (let k = 2; k <= number - 1; k++) {

                if (number % k !== 0) {
                    sumNonPrime = 0;
                    continue;

                } else {
                    sumNonPrime = number;
                }

                break;
            }
            sumNonPrime2 = sumNonPrime2 + sumNonPrime;
            if (sumNonPrime !== number) {
                sumPrime = number;
            } else { sumPrime = 0; }
            sumPrime2 = sumPrime2 + sumPrime;
            break;

        }
    }
    console.log(`Sum of all prime numbers is: ${sumPrime2}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime2}`);
}
sumPrimeNonPrime(["3",

    "9",

    "0",

    "7",

    "19",

    "4",

    "stop"])