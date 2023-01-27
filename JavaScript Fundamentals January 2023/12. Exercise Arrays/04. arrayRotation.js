function arrayRotation(array, numOfRotations) {
    let nweArray = []

    for (let j = 0; j < numOfRotations; j++) {
      
        nweArray.push(array[0])
        array.shift()
        array.push(nweArray[0])
        nweArray.shift()
    }
    console.log(array.join(" "))

}
arrayRotation([51, 47, 32, 61, 21], 2)
