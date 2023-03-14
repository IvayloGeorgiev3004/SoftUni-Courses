function cardGame(array) {
    let cardPowerMap = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }

    let cardTypeMap = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }
    let players = new Map()


    array.forEach(element => {
        let [playerName, cardsDeck] = element.split(": ")
        let cardDeckSet = new Set()
        cardsDeck = cardsDeck.split(", ")
        if (!players.has(playerName)) {
            cardsDeck.forEach(element => {
                cardDeckSet.add(element)
                players.set(playerName, cardDeckSet)
            })
        } else {
            let currentDesk = players.get(playerName)
            cardsDeck.forEach(element => {
                currentDesk.add(element);
                players.set(playerName, currentDesk)
            })
        }

    });


    for (let cards of players) {
        let name = cards.shift()
        let deck = cards.shift()
        let sum = 0;
        deck.forEach(element => {
            element = element.split("")
            let type = element.pop()
            let power = element.slice(0, element.length).join("")
            sum += cardPowerMap[power] * cardTypeMap[type]
        })
        players.set(name, sum)
        console.log(`${name}: ${sum}`)
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S, 10S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
console.log("----------------------------")
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])