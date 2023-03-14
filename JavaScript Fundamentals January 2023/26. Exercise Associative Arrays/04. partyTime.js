function partyTime(array) {
    let vipGuests = new Set();
    let regularGuests = new Set();

    let vipGuestsArr = [];
    let regularGuestsArr = [];

    let partyCommand = array.indexOf("PARTY")
    let guest = array.splice(0, partyCommand)
    array.shift()

    for (let vipOrNo of guest) {
        let isNum = isNumber(vipOrNo[0]);
        if (isNum) {
            vipGuestsArr.push(vipOrNo)
        } else {
            regularGuestsArr.push(vipOrNo)
        }
    }

    for (let going of array) {
        if (vipGuestsArr.includes(going)) {
            let index = vipGuestsArr.indexOf(going)
            vipGuestsArr.splice(index, 1)
            vipGuests.delete(going)
        }
        if (regularGuestsArr.includes(going)) {
            let index = regularGuestsArr.indexOf(going)
            regularGuestsArr.splice(index, 1)
            regularGuests.delete(going)
        }

    }
    // debugger
    // let concatArrays = vipGuestsArr.concat(regularGuestsArr)
    // debugger

    vipGuestsArr.forEach(element => vipGuests.add(element));
    regularGuestsArr.forEach(element => regularGuests.add(element));

    let totalMissingGuests = regularGuests.size + vipGuests.size
    console.log(totalMissingGuests)

    let missingVipGuests = Array.from(vipGuests).forEach(element => console.log(element))
    let missingRegularGuests = Array.from(regularGuests).forEach(element => console.log(element))


    function isNumber(char) {
        return /^\d$/.test(char);
    }

    // ФУНКЦИЯ КОЯТО ПРОВЕРЯВА ДАЛИ ДАДЕНА ЧАСТ ОТ СТРИНГ Е ЧИСЛО!
    
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])


// function milliseconds(x) {
//     if (isNaN(x[0])) {
//       return 'Not a Number!';
//     }
//     return `is number` }
  
//   console.log(milliseconds('5asdjklS3sad'));
//   // Expected output: "Not a Number!"
  
//   console.log(milliseconds('0.0314E+2'));
//   // Expected output: 3140