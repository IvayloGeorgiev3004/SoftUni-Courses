function pyramid(input) {
    let num = Number(input[0]);
    let currentCounter = 1;
    let printLine = "";
    let breakLoop = false;


    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            if (currentCounter > num) {
                breakLoop = true;
                break;
            }
            printLine += currentCounter + " "
            currentCounter++
        }
        console.log(printLine)
        printLine = ""
        if (breakLoop === true) {
            break;
        }
    }

}
pyramid(["15"])