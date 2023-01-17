function triangleOfNumbers(rows) {
    let result = ""
    for (let i = 1; i <= rows; i++) {
        for (let columns = 1; columns <= i; columns++) {
            result += i + " "
        }
        console.log(result.trim())
        result = ""
    }

}
triangleOfNumbers(5)