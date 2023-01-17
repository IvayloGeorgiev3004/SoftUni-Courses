function numberCar(input){


    let i = Number (input[0]);
    let endNumber = Number (input[1]);
    let firstNumber =0;
    let secondNumber =0;
    let thirdNumber = 0;
    let fourthNumber=0;
    let stringOfNumbers = ""


    
      

                for (firstNumber= i; firstNumber<=endNumber;firstNumber++)
                for (secondNumber= i; secondNumber<=endNumber;secondNumber++)
                for (thirdNumber= i; thirdNumber<=endNumber;thirdNumber++)
                for (fourthNumber= i; fourthNumber<=endNumber;fourthNumber++)


                if(firstNumber % 2 === 0 && fourthNumber % 2 === 0 ){
                    continue;
                }else if (firstNumber % 2 !== 0 && fourthNumber % 2 !== 0 ){
                    continue;
                }

                else if ((secondNumber+thirdNumber) % 2 !== 0 ){
                    continue;}
                else if (fourthNumber >= firstNumber ){
                    continue;}

                
            
                else {

                    stringOfNumbers += (`${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`+ " ")
                    continue;}
        
    
                    console.log(`${stringOfNumbers}`);
    }



numberCar(["3",
"3",
])