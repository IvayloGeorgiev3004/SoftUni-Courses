function moving222(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let totalBoxes = width * length * height;
    let boxesTaken = 0;
    let flag = false;

    let index = 3;
    let currentInput = input[index];

    while (currentInput !== "Done") {
        boxesTaken = Number(currentInput);
        totalBoxes -= boxesTaken
        if (totalBoxes <= 0) {
            flag = true;
            break;
        }
        index++
        currentInput = input[index];

    }

    if (flag === true) {
        console.log(`No more free space! You need ${Math.abs(totalBoxes)} Cubic meters more.`)
    } else {
        console.log(`${totalBoxes} Cubic meters left.`)
    }


}
moving222(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])