function equalSums222(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let string = 0
    let printLine = ""
    let currentNum = 0;

    let evenSum = 0;
    let oddSum = 0;

    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;
    let number5 = 0;
    let number6 = 0;


    for (let i = num1; i <= num2; i++) {
        string = `${i}`;
        for (let j = 0; j<=string.length;j++){
            currentNum = Number(string.charAt(j));
            if (j % 2 === 0){
                evenSum+=currentNum
            } else {
                oddSum+=currentNum
            }
           
        }
        if (evenSum === oddSum){
            printLine+= `${i} `
        }
        
    }
  console.log(printLine)
}

equalSums222(["100000",

    "100050"])