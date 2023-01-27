function arrayRotation(array, numOfRotations) {
    let newArray = []

    for (let j = 0; j < numOfRotations; j++) {

        newArray.push(array[0])
        array.shift()
        array.push(newArray[0])
        newArray.shift()
    }
    console.log(array.join(" "))

}
arrayRotation([51, 47, 32, 61, 21], 2)


function arrayRotation(array, numRotation) {
    let newArray = [];
    let counter = 0;

    while (counter < numRotation) {
        for (let i = 1; i <= array.length - 1; i++) {
            newArray.push(array[i]);

        }
        newArray.push(array[0]);
        counter++;
        array = newArray;
        newArray = [];

    }


    console.log(array.join(" "));
}