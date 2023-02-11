function sumFirstAndLast(array) {
    let start = Number(array.shift())
    let end = Number(array.pop())
    let finalResult = start + end;
    return finalResult
}
console.log(sumFirstAndLast(['5', '10']))