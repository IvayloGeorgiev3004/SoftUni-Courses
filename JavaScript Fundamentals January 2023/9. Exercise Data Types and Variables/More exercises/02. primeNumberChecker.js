function primeNumberChecker(num){
    if (num % num === 0 && num % 1 === 0){
        console.log(`prime`)
    } else {
        console.log("not prime")
    }
}
primeNumberChecker(11)