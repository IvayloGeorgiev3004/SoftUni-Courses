function trainTheTrainers(input) {
    let index = 0
    let juryNumber = Number(input[index]);
    index++
    let currentIndex = input[index];
    let taskName = ""
    let currentGrade = 0;
    let currentGradeCounter = 0;
    let totalGradeCounter = 0;
    let totalGrade = 0;
    let allGrades = 0;

    while (currentIndex !== "Finish") {
        taskName = input[index]
        for (let i = 0; i < juryNumber; i++) {
            index++
            currentGradeCounter++
            currentGrade = Number(input[index])
            totalGrade += currentGrade;
            allGrades += currentGrade;
        }
        console.log(`${taskName} - ${(totalGrade / juryNumber).toFixed(2)}.`)
        totalGrade = 0;
        totalGradeCounter += currentGradeCounter
        currentGradeCounter = 0
        index++
        currentIndex = input[index]
    }
    console.log(`Student's final assessment is ${(allGrades / totalGradeCounter).toFixed(2)}.`)

}
trainTheTrainers(["2",

    "While-Loop",

    "6.00",

    "5.50",

    "For-Loop",

    "5.84",

    "5.66",

    "Finish"])