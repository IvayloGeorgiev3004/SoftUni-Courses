function figures(input){
    let figure = input[0];
    
    if (figure == "square"){
        let a = Number(input[1]);
        let area = a * a;
        console.log('square')
        console.log(area.toFixed(3));
    } else if (figure == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log('rectangle')
        console.log(area.toFixed(3));
    } else if (figure == "circle"){
        let a = Number(input[1]);
        let diameter = Math.pow(a, 2) // може и a * a
        let area  = Math.PI * diameter // може и Math.PI * Math.pow(a, 2)
        console.log('circle')
        console.log(area.toFixed(3));
    } else if (figure == "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = (a * b) / 2;
        console.log('triangle')
        console.log(area.toFixed(3));
    }


}
figures(["triangle","4.5","20"])