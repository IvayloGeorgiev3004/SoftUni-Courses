function uniquePINCodes(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    let printNum1 = 0;
    let printNum2 = 0;


    for (let i = 1; i <= num1; i++) {
        for (let k = 1; k <= num2; k++) {
            for (let l = 1; l <= num3; l++) {
                if (i % 2 === 0 && l % 2 === 0) {
                    printNum1 = i;
                    printNum2 = l;
                    if (k !== 0) {
                        if (k === 2 || k === 3 || k === 5 || k === 7 || k === 11 || k === 13 || k === 17) {
                            console.log(`${printNum1} ${k} ${printNum2}`)
                        }
                    }

                }

            }
        }
    }

}
uniquePINCodes([8,
    2,
    8])