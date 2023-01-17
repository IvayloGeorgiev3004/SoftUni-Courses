function digits(input) {
    let specialNumber = String(input[0]);
    let specialNumber2 = Number(input[0])
    let firstDigit = Number(specialNumber[0]);
    let secondDigit = Number(specialNumber[1]);
    let thirdDigit = Number(specialNumber[2]);

    let n = firstDigit + secondDigit;
    let m = firstDigit + thirdDigit;
    let rows = n;
    let numbersPerRow = m;
    let string = ""

    for (let m = 0; m < rows; m++) {
        for (let i = 0; i < numbersPerRow; i++) {
            if (specialNumber2 % 5 === 0) {
                specialNumber2 -= firstDigit;
            } else if (specialNumber2 % 3 === 0) {
                specialNumber2 -= secondDigit;
            } else {
                specialNumber2 += thirdDigit;
            }
            string += `${specialNumber2} `

        }
        console.log(string.trim());
        string = ""
    }

}
digits([376])