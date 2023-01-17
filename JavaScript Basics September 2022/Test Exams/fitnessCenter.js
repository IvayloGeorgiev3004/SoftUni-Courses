function fitnessCenter(input) {
    let totalPeople = Number(input[0])



    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let workOutCounter = 0;
    let proteinCounter = 0;

    for (let i = 1; i <= totalPeople; i++) {
        let currentInput = input[i]
        switch (currentInput) {
            case "Back": backCounter++; workOutCounter++; break;
            case "Chest": chestCounter++; workOutCounter++; break;
            case "Legs": legsCounter++; workOutCounter++; break;
            case "Abs": absCounter++; workOutCounter++; break;
            case "Protein shake": proteinShake++; proteinCounter++; break;
            case "Protein bar": proteinBar++; proteinCounter++; break;
        }
    }
    console.log(`${backCounter} - back`)
    console.log(`${chestCounter} - chest`)
    console.log(`${legsCounter} - legs`)
    console.log(`${absCounter} - abs`)
    console.log(`${proteinShake} - protein shake`)
    console.log(`${proteinBar} - protein bar`)
    console.log(`${((workOutCounter * 100) / totalPeople).toFixed(2)}% - work out`)
    console.log(`${((proteinCounter * 100) / totalPeople).toFixed(2)}% - protein`)

}
fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
