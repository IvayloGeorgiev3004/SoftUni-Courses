function specialNumbers3(number) {
    let stringFromNum = number.toString()
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j < stringFromNum.length-1; j++) {
            let numFromString = Number(stringFromNum[j])
            
            sum += i + numFromString;
        }
    }
}
specialNumbers3(15)