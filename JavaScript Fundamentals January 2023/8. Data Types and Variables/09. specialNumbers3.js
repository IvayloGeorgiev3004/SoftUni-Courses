function specialNumbers3(number) {
    let stringFromNum = number.toString()
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let testString = i.toString();
        for (let j = 0; j < testString.length-1; j++) {
            let numFromString = Number(testString[j])
            
            sum += i + numFromString;
        }
    }
}
specialNumbers3(15)