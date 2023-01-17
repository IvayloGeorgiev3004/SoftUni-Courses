function sumofNumbers22(input) {

    let num = input[0];
    let finalResult = 0;
    
    for (i = 0; i < num.length; i++) {
        let numbers = Number(num[i]);
        finalResult = numbers + finalResult
    }
    console.log(`The sum of the digits is:${finalResult}`)
}
sumofNumbers22(["564891"])