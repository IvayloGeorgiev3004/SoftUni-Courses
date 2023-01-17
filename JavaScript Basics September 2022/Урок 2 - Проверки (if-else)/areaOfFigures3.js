function areaOfFigures(input){

    let figure = input[0];
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);

    let result = 0;

    switch(figure){
        case "square":
            result = sideA * sideA;
            console.log(result.toFixed(3));
            break;
        case "rectangle":
            result = sideA * sideB;
            console.log(result.toFixed(3));
            break;
        case "circle":
            result = Math.PI * (Math.pow(sideA, 2));
            console.log(result.toFixed(3));
            break;
        case "triangle":
            result = (sideA * sideB) / 2;
            console.log(result.toFixed(3));
            break; 
    }
}
areaOfFigures(["circle", "6"])