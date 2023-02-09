function factorialDivision(num1, num2) {

    function numFactorialDivision(a) {

        let result = a
        for (let i = a - 1; i > 0; i--) {
            result *= i;
        }
        return result;
    }
    let finalResult = (numFactorialDivision(num1) / numFactorialDivision(num2)).toFixed(2)

    return finalResult
}
console.log(factorialDivision(1, 1))
