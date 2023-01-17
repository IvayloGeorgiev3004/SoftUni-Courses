function buildingWithFloors(input) {
    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);
    let finalResult = ""
    let finalResult2 = ""
    let finalResult3 = ""


    for (let i = floorsCount; i >= 1; i--) {
        for (let j = 0; j < roomsCount; j++) {
            if (i === floorsCount) {
                finalResult += `L${i}${j} `
            } else if (i % 2 === 0) {
                finalResult += `O${i}${j} `
            } else {
                finalResult += `A${i}${j} `
            }
        }
        console.log(finalResult.trim())
        finalResult = ""
    }

}
buildingWithFloors((["6", "4"]))