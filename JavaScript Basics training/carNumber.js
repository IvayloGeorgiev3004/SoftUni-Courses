function carNumber(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let specialNumber = ""

    for (let a = startNumber; a <= endNumber; a++) {
        for (let b = startNumber; b <= endNumber; b++) {
            for (let c = startNumber; c <= endNumber; c++) {
                for (let d = startNumber; d <= endNumber; d++) {
                    //Ако номерът започва с четна цифра, то той трябва да завършва на нечетна цифра и обратното – ако започва с нечетна,  завършва на четна
                    if (a % 2 === 0 && d % 2 !== 0 || a % 2 !== 0 && d % 2 === 0) {
                        // Първата цифра от номера е по-голяма от последната
                        if (a > d) {
                            // Сумата от втората и третата цифра трябва да е четно число
                            if ((b + c) % 2 === 0) {
                                specialNumber += `${a}${b}${c}${d} `
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(specialNumber)

}
carNumber([2, 3])