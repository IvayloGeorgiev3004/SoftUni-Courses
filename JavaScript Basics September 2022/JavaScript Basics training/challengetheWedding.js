function challengeTheWedding(input) {
    let men = Number(input[0])
    let women = Number(input[1])
    let totalTables = Number(input[2])
    let tablesCounter = 0;
    let flag = false;
    let finalOutput = ""

    for (let i = 1; i <= men; i++) {
        for (let k = 1; k <= women; k++) {
            if (tablesCounter >= totalTables) {
                flag = true;
                break;
            }
            tablesCounter++
            finalOutput += `(${i} <-> ${k}) `
            console.log()
        }
        if (flag === true) {
            break;
        }
    }
    console.log(finalOutput.trim())
}
challengeTheWedding([5, 8, 40])