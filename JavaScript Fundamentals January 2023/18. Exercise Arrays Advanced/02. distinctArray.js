function distinctArray(array) {
    let newArray = array.slice(0);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1)
                j--
            }
        }
    }
    return array.join(" ")
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
