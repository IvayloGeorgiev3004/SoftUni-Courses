function exam(input) {
    let studentCount = Number(input[0])

    let firstCounter = 0;
    let secondCounter = 0;
    let thirdCounter = 0;
    let forthCounter = 0;
    let averageCounter = 0;

    let currentGrade = 0;

    for (let i = 1; i <= studentCount; i++) {
        currentGrade = Number(input[i]);
        averageCounter += currentGrade;
        if (currentGrade <= 2.99) {
            firstCounter++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            secondCounter++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99) {
            thirdCounter++;
        } else if (currentGrade >= 5) {
            forthCounter++;
        }
    }
    console.log(`Top students: ${((forthCounter * 100) / studentCount).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((thirdCounter * 100) / studentCount).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((secondCounter * 100) / studentCount).toFixed(2)}%`);
    console.log(`Fail: ${((firstCounter * 100) / studentCount).toFixed(2)}%`);
    console.log(`Average: ${(averageCounter / studentCount).toFixed(2)}`);

}
exam(["6",
    "2",
    "3",
    "4", "5",
    "6",
    "2.2"])

