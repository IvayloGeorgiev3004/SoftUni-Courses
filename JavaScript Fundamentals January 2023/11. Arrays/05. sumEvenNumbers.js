/* function sumEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i])
        if (num % 2 == 0) {
            sum += num;
        } else {
            continue;
        }

    }
    console.log(sum)
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']) */

function sumEvenNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }

    for (const number of arr) {
        if (number % 2 == 0) {
            sum += number;
        } else {
            continue;
        }
    }

    console.log(sum)
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])