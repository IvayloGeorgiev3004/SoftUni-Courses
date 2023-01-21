function primeNumberChecker(num) {
    isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime === true ? "true" : "false")
}
primeNumberChecker(11)