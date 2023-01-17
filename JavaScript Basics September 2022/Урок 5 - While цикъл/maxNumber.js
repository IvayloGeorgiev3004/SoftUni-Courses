function maxNumber(input){
    let index = 0;
    let currentInput = input[index];
    let currentNumber = 0;
    let maxNumber  = Number.MIN_SAFE_INTEGER

    while (currentInput !== "Stop"){
        currentNumber = Number(input[index]);

        if (currentNumber > maxNumber){
              maxNumber = currentNumber
          
        }
        index++
        currentInput = input[index]


    }
    console.log(maxNumber)
}
maxNumber(["100",

"99",

"80",

"70",

"Stop"])