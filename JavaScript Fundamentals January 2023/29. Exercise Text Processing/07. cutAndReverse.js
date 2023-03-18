function cutAndReverse(string) {
    let firstHalf = string.substring(0, string.length / 2)
    let secondHalf = string.substring(string.length / 2, string.length)

    console.log(`${Array.from(firstHalf).reverse().join("")}`)
    console.log(`${Array.from(secondHalf).reverse().join("")}`)

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')