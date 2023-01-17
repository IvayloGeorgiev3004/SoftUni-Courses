function vowelsSum(input){
    let text = input[0];
    let sum = 0;

    for(let i = 0; i < text.length; i++){
        let currentChar = text.charAt(i);
        let value = 0;

switch(currentChar){
    case "a": sum += 1; break;
    case "e": sum += 2; break;
    case "": sum += 3; break;
    case "o": sum += 4; break;
    case "u": sum += 5; break;
    default:
    
}

    
    }
    console.log(sum)
}
vowelsSum(["hello"])
