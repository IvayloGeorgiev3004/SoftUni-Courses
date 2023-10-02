function checkValidity(x1, y1, x2, y2) {

    let distance1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2))
    let distance2 = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2))
    let distance3 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

    let isInteger1 = null;
    let isInteger2 = null;
    let isInteger3 = null;

    (Number.isInteger(distance1)) ? isInteger1 = "valid" : isInteger1 = "invalid"; // ternary operator to check if the number is an integer or not
    (Number.isInteger(distance2)) ? isInteger2 = "valid" : isInteger2 = "invalid"; // ternary operator to check if the number is an integer or not
    (Number.isInteger(distance3)) ? isInteger3 = "valid" : isInteger3 = "invalid"; // ternary operator to check if the number is an integer or not

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isInteger1}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isInteger2}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isInteger3}`)
}
checkValidity(2, 1, 1, 1)
