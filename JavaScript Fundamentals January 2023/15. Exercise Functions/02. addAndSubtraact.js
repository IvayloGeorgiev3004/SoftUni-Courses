function addAndSubtract(add1, add2, subtract) {
    let sum = (a, b) => a + b;
    let subtractTwoNumbs = (a, b) => a - b;

    let addTwoNumbs = sum(add1, add2);
    return subtractTwoNumbs(addTwoNumbs, subtract);

}
console.log(addAndSubtract(23,
    6,
    10))