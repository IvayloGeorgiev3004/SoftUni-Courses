function fishTank(input){
    let aquariumLenght = Number(input[0]);
    let aquariumWidht = Number(input[1]);
    let aquariumHeight = Number(input[2]);

    let aquariumTotal= aquariumLenght * aquariumWidht * aquariumHeight;
    let aquariumVolume = aquariumTotal / 1000
    let occupiedSpace = Number(input[3]) / 100

    let finalResult  = aquariumVolume - (aquariumVolume * occupiedSpace) 

    console.log(finalResult);
}

fishTank(["85 ","75","47","17"]);

function fishTank2(input){
    let aquariumLenght = Number(input[0]);
    let aquariumWidht = Number(input[1]);
    let aquariumHeight = Number(input[2]);

    let aquariumTotal= aquariumLenght * aquariumWidht * aquariumHeight;
    let aquariumVolume = aquariumTotal / 1000
    let occupiedSpace = Number(input[3]) / 100

    let finalResult  = aquariumVolume * (1-occupiedSpace)
    console.log(finalResult);
    
}
    
fishTank2(["85 ","75","47","17"]);