function cookingMasterClass(array) {
    let budget = Number(array.shift()) * 100;
    let students = array.shift();

    let flourForFree = 0;
    let flourPrice = Number(array.shift()) * 100;
    let totalFlourPrice = flourPrice * students;
    let eggsPrice = Number((array.shift()) * 10) * 100
    let totalEggsPrice = students * eggsPrice;
    let singleApronPrice = Number(array.shift()) * 100;
    let apronsMore = Math.ceil(students * 0.2)
    let totalApronsNeeded = students + apronsMore;

    let totalApronsPrice = singleApronPrice * totalApronsNeeded

    let totalPrice = totalFlourPrice + totalEggsPrice + totalApronsPrice

    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            flourForFree += flourPrice;
        }
    }
    totalPrice -= flourForFree;

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${(totalPrice / 100).toFixed(2)}$`)
    } else {
        console.log(`${((totalPrice - budget) / 100).toFixed(2)}$ more needed.`)
    }
    
}
cookingMasterClass([100,

    25,

    4,

    1,

    6])