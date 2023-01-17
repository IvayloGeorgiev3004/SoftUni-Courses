function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let currentFloor = "";

    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i === floors) {
                currentFloor = currentFloor + `L${i}${j} `;
            } else if (i % 2 === 0) {
                currentFloor = currentFloor + `O${i}${j} `;
            } else {
                currentFloor = currentFloor + `A${i}${j} `;
            }
        }
        console.log(currentFloor.trim());
        currentFloor = "";
    }
}
building(["6", "4"]);
