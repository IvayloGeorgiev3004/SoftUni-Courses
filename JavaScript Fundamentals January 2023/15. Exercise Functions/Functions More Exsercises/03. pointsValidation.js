function pointsValidation(array) {
    let x1 = Number(array[0])
    let y1 = Number(array[1])
    let x2 = Number(array[2])
    let y2 = Number(array[3])

    let result = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2))  // distance between (x1, y1) and (x2, y2)
    let result2 = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2))  // distance between (x1, y1) and (x2, y2)
    let result3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) // distance between (x1, y1) and (x2, y2)

    if (Number.isInteger(result)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(result2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(result3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


}
pointsValidation([2, 1, 1, 1])