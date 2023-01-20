/* function integerOrFloat(num1, num2, num3) {
    let newNumber = num1 + num2 + num3;
    if (Number.isInteger(newNumber)){
        console.log(`${newNumber} - Integer`)
    } else {
        console.log(`${newNumber} - Float`)
    }

}
integerOrFloat(100, 200, 303) */

function integerOrFloat2(num1, num2, num3) {
    let newNumber = num1 + num2 + num3;
    console.log(Number.isInteger(newNumber) ? newNumber + " - Integer" : newNumber + " - Float")

}
integerOrFloat2(100, 200, 303)