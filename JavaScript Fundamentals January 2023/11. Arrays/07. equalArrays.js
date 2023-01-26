function equalArrays(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i])
    }

    for (let j = 0; j < array2.length; j++) {
        array2[j] = Number(array2[j])
    }
    
    console.log(array1)
    console.log(array2)
}

equalArrays(['10','20','30'],

['10','20','30'])