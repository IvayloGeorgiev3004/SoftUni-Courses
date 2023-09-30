function sumOfNumberMtoN(start, end) {
    start = Number(start)
    end = Number(end)
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += i
    }
    console.log(sum)
}
sumOfNumberMtoN('5', '-5')