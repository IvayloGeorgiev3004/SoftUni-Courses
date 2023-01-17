function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3]
    numbers.sort()
    numbers.reverse()

    for (let i = 0; i < numbers.length; i++) {
        console.log(Number(numbers[i]))
    }

}
sortNumbers(0, 0, 2)