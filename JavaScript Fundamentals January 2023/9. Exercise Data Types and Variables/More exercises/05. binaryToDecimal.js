function binaryToDecimal(binary) {
    let binaryToString = binary.toString();

    binaryToString = parseInt(binaryToString, 2);

    console.log(binaryToString)

}
binaryToDecimal("11110000")