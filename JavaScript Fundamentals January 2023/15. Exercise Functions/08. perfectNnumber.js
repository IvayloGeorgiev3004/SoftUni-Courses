function perfectNumber(number) {
    let buffArray = []
    buffArray[0] = 1;
    let sum = 0;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            buffArray.push(i)
        }
    }
    for (let j = 0; j < buffArray.length; j++) {
        sum += buffArray[j]
    }

    console.log(sum === number ? "We have a perfect number!" : "It's not so perfect.")
}
perfectNumber(6)