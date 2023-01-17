function cake222(input){
    let cakeDimension1 = Number(input[0])
    let cakeDimension2 = Number(input[1])
    let totalCakeDimensions = cakeDimension1 * cakeDimension2;
    let index = 2;
    let currentInput = Number(input[index]);
    flag = false;

    while(currentInput !== "STOP"){
             totalCakeDimensions-=currentInput

             if (totalCakeDimensions <= 0){
                flag = true;
                break;
             }
        currentInput = Number(input[index]);
        index++

    }

if (flag === true){
    console.log(`No more cake left! You need 1 pieces more.`)
}



}
cake222(["10",
"10",
"20",
"20",
"20",
"20",
"21"])