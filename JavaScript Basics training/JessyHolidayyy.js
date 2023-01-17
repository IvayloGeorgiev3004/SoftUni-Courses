function vacation (input){
 
let neededMoney = Number (input[0]);
let moneyNow = Number (input[1]);
let i = 2;
let command = (input[i]);
let sum = 0;
let spendCounter = 0;
let dayCounter = 0;


while (command === "spend" || command === "save"){
    if (command === "spend"){
 
        sum = Number (input [i+1]);
 
moneyNow -= sum

if(moneyNow<0){
    moneyNow = 0;
}
spendCounter ++
dayCounter ++
if (spendCounter>= 5){
 
    console.log("You can't save the money.");
    console.log (`${dayCounter}`)
    break;
}else if (moneyNow >=neededMoney){
    console.log(`You saved the money for ${dayCounter} days.`);
}
 
    }
 
    else if (command === "save"){
 
        sum = Number (input [i+1]);
        moneyNow += sum
        dayCounter++
 
        if (moneyNow >=neededMoney){
            console.log(`You saved the money for ${dayCounter} days.`);
        }
    }
    i ++
    command = (input[i]);

    if (command !== "spend" || command !== "save"){
        i ++
    command = (input[i]);
    }
    
}

 
 
 
}

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);

