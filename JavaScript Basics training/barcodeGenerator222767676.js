function barcodeGenerator222(input) {
    let startInterval = input[0];
    let endInterval = input[1];

    let num1 = Number(startInterval[0])
    let num2 = Number(startInterval[1])
    let num3 = Number(startInterval[2])
    let num4 = Number(startInterval[3])

    let endNum1 = Number(endInterval[0]);
    let endNum2 = Number(endInterval[1]);
    let endNum3 = Number(endInterval[2]);
    let endNum4 = Number(endInterval[3]);

    let specialBarCodes = ""

    for (let i = num1; i <= endNum1; i++) {
        for (let j = num2; j <= endNum2; j++) {
            for (let k = num3; k <= endNum3; k++) {
                for (let l = num4; l <= endNum4; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        specialBarCodes += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }


    console.log(specialBarCodes)
}
barcodeGenerator222(['3256',
    '6579'])