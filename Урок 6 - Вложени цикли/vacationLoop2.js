function vacationLoop2(input) {
    let index = 0
    let currentInput = input[index]
    index++
    let neededSum = Number(input[index]);
    let savedMoney = 0;

    while (currentInput !== "End") {
        while (neededSum > savedMoney) {
            index++
            savedMoney += Number(input[index])

            if (savedMoney >= neededSum) {
                console.log(`Going to ${currentInput}!`)
                index++
            }

        }
        savedMoney = 0
        currentInput = input[index]
        index++
        neededSum = Number(input[index]);
    }

}
vacationLoop2(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])