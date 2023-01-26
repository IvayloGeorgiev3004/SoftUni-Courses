function equalArrays(array1, array2) {
    let arr1 = 0;
    let arr2 = 0;
    let sum = 0;
    let flag = false;

    for (let i = 0; i < array1.length; i++) {
        /*     if (array1.length !== array2.length) {
                console.log(`Arrays are not identical. Found difference at ${array1.length} index`)
                flag = true;
                break;
            } */
        array1[i] = Number(array1[i])
        for (let j = i; j < array1.length; j++) {
            array2[j] = Number(array2[j])
            arr1 = array1[i]
            arr2 = array2[j]
            sum += arr1 + arr2
            if (arr1 === arr2) {
                break;
            } else {
                console.log(`Arrays are not identical. Found difference at ${i} index`)
                flag = true
                break;
            }

        }
        if (flag === true) {
            break;
        }
    }
    if (flag === false) {
        console.log(`Arrays are identical. Sum: ${sum / 2}`)
    }

}

equalArrays(['10', '20', '30'], ['10'])