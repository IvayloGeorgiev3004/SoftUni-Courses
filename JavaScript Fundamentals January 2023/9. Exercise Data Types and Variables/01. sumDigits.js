function sumDigits(number) {
    let sum = 0;
    let charFromNum = number.toString();
    for (let i = 0; i < charFromNum.length; i++) {
        let numFromChar = Number(charFromNum[i])
        sum += numFromChar;

    }
    console.log(sum)

}
sumDigits(97561)