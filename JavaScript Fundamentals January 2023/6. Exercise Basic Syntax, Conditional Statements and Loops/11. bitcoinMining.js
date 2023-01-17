function bitcoinMining(input) {
    let index = 0;
    let levaInGold = 67.51
    let bitCoinsInLeva = 11949.16;
    let dayCounter = 0;
    let bitCoins = 0;
    let firstBitcoinBought = 0;
    let totalMoney = 0;
    let currentMine = Number(input[index]);


    while (index <= input.length - 1) {
        dayCounter++
        if (dayCounter % 3 !== 0) {
            totalMoney += currentMine * levaInGold;
        } else {
            currentMine *= 0.70;
            totalMoney += currentMine * levaInGold;
        }
        if (totalMoney >= bitCoinsInLeva) {
            for (let i = totalMoney; totalMoney >= bitCoinsInLeva; totalMoney - bitCoinsInLeva) {
                if (totalMoney >= bitCoinsInLeva) {
                    totalMoney -= bitCoinsInLeva;
                    bitCoins++
                }
                if (firstBitcoinBought === 0) {
                    firstBitcoinBought = dayCounter;
                }
            }
        }

        index++
        currentMine = Number(input[index]);
    }


    console.log(`Bought bitcoins: ${bitCoins}`)
    if (firstBitcoinBought !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBought}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}
bitcoinMining([100, 200, 300])