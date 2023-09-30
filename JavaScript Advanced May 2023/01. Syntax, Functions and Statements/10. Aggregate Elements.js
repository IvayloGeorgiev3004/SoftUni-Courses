function performOperations(array) {
    let sum = array.reduce((acc, current) => acc + current, 0);
    console.log(sum)
    let sumInverse = array.reduce((acc, current) => acc + 1 / current, 0)
    console.log(sumInverse)

    // let test = array.reduce((началнаСтойност, моментаСтонйностВМасива,) => началнаСтойност + моментаСтонйностВМасива, 6)


    let string = ""
    array.forEach((element) => {
        let concatResult = element.toString();
        string += `` + `${concatResult}`
    })
    console.log(string)

}

performOperations([1, 2, 3])