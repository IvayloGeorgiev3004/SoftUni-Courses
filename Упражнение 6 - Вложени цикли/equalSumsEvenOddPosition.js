function equalSumsEvenOddPosition(input) {

    let startNum = Number(input[0]);
    let endNumber = Number(input[1]);

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;


    let stringOfNumbers = "";


    for (let i = startNum; i <= endNumber; i++) {
        let string = String(i);
        num1 = Number(string[0]);
        num2 = Number(string[1]);
        num3 = Number(string[2]);
        num4 = Number(string[3]);
        num5 = Number(string[4]);
        num6 = Number(string[5]);

        if (num1 + num3 + num5 === num2 + num4 + num6) {
            stringOfNumbers += `${num1}${num2}${num3}${num4}${num5}${num6} `;

        }

    }
    console.log(`${stringOfNumbers}`);
}
equalSumsEvenOddPosition(["123456",

    "124000"])