function nxnMatrix(matrixNum) {
    let rows = ""
    for (let i = 0; i < matrixNum; i++) {
        rows += matrixNum + " "
    }
    for (let j = 0; j < matrixNum; j++) {
        console.log(rows)
    }
}
nxnMatrix(7)