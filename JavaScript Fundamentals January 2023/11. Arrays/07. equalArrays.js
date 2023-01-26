/* function equalArrays(array1, array2) {
    let arr1 = 0;
    let arr2 = 0;
    let sum = 0;
    let flag = false;

    for (let i = 0; i < array1.length; i++) {
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
equalArrays(['10', '20'], ['10', '20', '30']) */


function equalArrays(array1, array2) {

    let areEqual = Boolean;
    let arrSum = 0;

    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i])
    }
    for (let j = 0; j < array1.length; j++) {
        array2[j] = Number(array2[j])
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual = false;
            break;
        } else {
            areEqual = true;
            arrSum += array1[i]
        }
    }
    if (areEqual === true) {
        console.log(`Arrays are identical. Sum: ${arrSum}`)
    }

}
equalArrays(['1','2','3','4','5'], ['1'])