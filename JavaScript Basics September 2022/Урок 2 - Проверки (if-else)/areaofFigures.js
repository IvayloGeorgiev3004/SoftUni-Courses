function areaofFigures(input){
    let figure = input[0];
    let side = Number(input[1]);
    let sideb = Number(input[2]);
    let area = 0;

    if (figure === 'square'){
        area = side * side;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle"){
        area = side * sideb
        console.log(area.toFixed(3));
    } else if (figure === "circle"){
        area = Math.pow(side, 2);
        let radius =  Math.PI * area;
        console.log(radius.toFixed(3));
    } else {
        area = (side * sideb) /2;
        console.log(area.toFixed(3));
    }
    

}
areaofFigures(["triangle", "4.5", "20"])