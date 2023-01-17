function task2(input) {
    let partyPrice = Number(input[0]);
    let loveMessagesCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyChainsCount = Number(input[3]);
    let caricaturesCount = Number(input[4]);
    let surpriseCharmCount = Number(input[5])
    let discount = 0

    let totalCount = loveMessagesCount + rosesCount + keyChainsCount + caricaturesCount + surpriseCharmCount

    let loveMessagesPrice = loveMessagesCount * 0.60;
    let rosesPrice = rosesCount * 7.20;
    let keyChainsPrice = keyChainsCount * 3.60;
    let caricaturesPrice = caricaturesCount * 18.20;
    let surpriseCharmPrice = surpriseCharmCount * 22.00;

    let finalPrice = loveMessagesPrice + rosesPrice + keyChainsPrice + caricaturesPrice + surpriseCharmPrice;

    if (totalCount >= 25) {
        discount = 0.65
        finalPrice *= discount
    }
    finalPrice *= 0.90

    if (finalPrice >= partyPrice) {
        console.log(`Yes! ${(finalPrice - partyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(partyPrice - finalPrice).toFixed(2)} lv needed.`)
    }

}
task2(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])

