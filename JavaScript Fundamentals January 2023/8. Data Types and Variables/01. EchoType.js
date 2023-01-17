function echoType(type) {
    let newType = typeof type

    if (newType === "string" || newType === "number") {
        console.log(newType)
        console.log(type)
    } else {
        console.log(newType)
        console.log(`Parameter is not suitable for printing`)
    }

}
echoType(2)

function solve(type) {

    if (typeof type === "string" || typeof type === "number") {
        console.log(typeof type)
        console.log(type)
    } else {
        console.log(typeof type)
        console.log(`Parameter is not suitable for printing`)
    }
}
solve(2)