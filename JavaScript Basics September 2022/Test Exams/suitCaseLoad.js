function suitCaseLoad(input) {

    let truncCapacity = Number(input[0])
    let suitCasesCapacity = 0;
    let suitCaseCounter = 0;
    let index = 1;
    let currentInput = input[index]

    while (currentInput !== "End") {
        suitCaseCounter++
        suitCasesCapacity = Number(input[index])

        if (suitCaseCounter % 3 === 0) {
            suitCasesCapacity = suitCasesCapacity * 1.1
        }

        if (suitCasesCapacity > truncCapacity) {
            suitCaseCounter--;
        }
        truncCapacity -= suitCasesCapacity


        if (truncCapacity < 0) {
            console.log(`No more space!`)
            console.log((`Statistic: ${suitCaseCounter} suitcases loaded.`));
            break;
        }
        index++
        currentInput = input[index]

    }
    if (truncCapacity >= 0) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log((`Statistic: ${suitCaseCounter} suitcases loaded.`));
    }

}
suitCaseLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"])
