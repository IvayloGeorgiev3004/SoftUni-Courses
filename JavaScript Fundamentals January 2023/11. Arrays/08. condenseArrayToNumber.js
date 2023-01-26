function condenseArrayToNumber(array) {
    let newArr = [];
    let buff = 0;
    let sum1 = 0;
    let sum2 = 0;


    for (let j = 0; j < 1; j++)
        for (let i = 0; i < array.length - 1; i++) {
            newArr[i] = array[i] + array[i + 1]

        }

    console.log(newArr)
    console.log(newArr.length)
}
condenseArrayToNumber([1,2,3])