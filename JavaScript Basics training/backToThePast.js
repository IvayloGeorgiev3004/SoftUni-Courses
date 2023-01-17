function backToThePast(input) {
    let totalMoney = Number(input[0])
    let lastYear = Number(input[1])
    let age = 17;
    let startYear = 1800

    for (let i = startYear; i <= lastYear; i++) {
        if (i % 2 === 0) {
            age++
            totalMoney -= 12000
        } else {
            age++
            totalMoney -= 12000
            totalMoney -= (50 * age)
        }
    }
    if (totalMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${totalMoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${Math.abs(totalMoney).toFixed(2)} dollars to survive.`)
    }

}
backToThePast([100000.15,
    1808])