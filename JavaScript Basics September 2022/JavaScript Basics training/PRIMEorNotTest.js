function testPrimeNum(input) {
    let testingNumber = Number(input[0])
    let isPrime = true;

   

    for (let i = 2; i < testingNumber; i++) {
        if (testingNumber % i === 0) {
            isPrime = false;
        }

    }
    if (testingNumber === 1) {
        console.log(`Number 1 is not a prime number!`)
      
    } else if (isPrime === true) {
        console.log(`${testingNumber} is a prime number`)
    } else {
        console.log(`${testingNumber} is NOT prime number`)
    }
}
testPrimeNum([1])