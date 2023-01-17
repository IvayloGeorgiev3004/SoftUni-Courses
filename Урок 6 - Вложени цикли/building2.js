function building2(input) {
    let totalFloors = Number(input[0]);
    let totalRooms = Number(input[1]);
    let roomType = ""

    for (let currentFloor = totalFloors; currentFloor >= 1; currentFloor--) {
        if (currentFloor === totalFloors) {
            roomType = "L"
        } else if (currentFloor % 2 === 0) {
            roomType = "O"
        } else {
            roomType = "A"
        }

        let finalResult = ""
        for (let currentRoom = 0; currentRoom < totalRooms; currentRoom++) {
            finalResult += `${roomType}${currentFloor}${currentRoom} `
        }
        console.log(finalResult.trim())
    }

}
building2(["9",

    "5"])