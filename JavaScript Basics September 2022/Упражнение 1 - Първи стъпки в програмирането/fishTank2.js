function fishTank2(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]); // процент от целия аквариум

    let aquariumSize = lenght * width * height;
    let aquariumVolume = aquariumSize / 1000
    let occupiedSpace = percent / 100
    let result = aquariumVolume * occupiedSpace

    let finalResult = aquariumVolume - result

    console.log(finalResult);

}
fishTank2(["85","75","47","17"])