function arrayRotation(array, rotations) {
    while (rotations > 0) {
        let buffArray = [];
        for (let i = 1; i < array.length; i++) {
            buffArray.push(array[i])
        }
        buffArray.push(array[0])
        array = buffArray
        rotations--;
    }
    console.log(array.join(" "))

}
arrayRotation([2], 5) 
    
function arrayRotation(array, rotations) {
    let newArray = [];

    while (rotations > 0) {
        newArray.push(array[0])
        array.shift()
        array.push(newArray[0])
        newArray = []
        rotations--;
    }
    console.log(array.join(" "))

}
arrayRotation([51, 47, 32, 61, 21], 2)