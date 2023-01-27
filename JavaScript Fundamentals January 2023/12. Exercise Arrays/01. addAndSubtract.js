function addAndSubtract(array) {
    let nweArray = []
    let buffer = 0;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            buffer = array[i] + i
            nweArray.push(buffer)
            buffer = 0;
        }
        else {
            buffer = array[i] - i
            nweArray.push(buffer)
            buffer = 0;
        }
    }
    for (const element of array) {
        sum1 += element
    }
    for (const element2 of nweArray) {
        sum2 += element2;
    }
    console.log(`[ ${nweArray.join(", ")} ]`)
    console.log(sum1)
    console.log(sum2)

}
addAndSubtract([-5, 11, 3, 0, 2])