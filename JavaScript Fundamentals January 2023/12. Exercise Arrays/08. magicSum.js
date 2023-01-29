 function magicSum(array, number) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((Number(array[i]) + Number(array[j])) === number) {
                console.log(array[i] + " " + array[j])
            }

        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],
 6) 

function magicSum2(array, number) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) === number) {
                console.log(array[i] + " " + array[j])
            }
        }

    }
}

magicSum2([1, 2, 3, 4, 5, 6],
    6)