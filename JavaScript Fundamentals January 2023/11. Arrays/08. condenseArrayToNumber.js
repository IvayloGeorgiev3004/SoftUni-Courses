function condenseArrayToNumber(array) {
    let newArr = [];
    let buff = 0;

    while (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            buff = array[i] + array[i + 1]
            newArr.push(buff);
            buff = 0;
        }
        array = newArr
        newArr = []
    }

    console.log(array.join(" "))

}
condenseArrayToNumber([1])

