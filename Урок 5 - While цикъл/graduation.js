function graduation(input) {

    let name = input[0];
    let gradeCounter = 0;
    let index = 1;
    let currentGrade = Number(input[index]);
    let averageGrade = 0;
    let excluded = 0;

    while (index <= 12) {
        currentGrade = Number(input[index])
        if (currentGrade >= 4) {
            gradeCounter++
            averageGrade += Number(currentGrade)
        } else if (currentGrade < 4 ) {
            excluded++
        }
        if (excluded === 2) {
            gradeCounter++
            console.log(`${name} has been excluded at ${gradeCounter} grade`)
            break;
        }
        index++
        currentGrade = input[index];
    }

    if (excluded < 2) {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`)
    }
}
graduation(["Gosho",

    "5",

    "5.5",

    "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])