function matchPhoneNumber(array) {
    let stringFromArray = array.shift();
    let regex = /\+359(?<separator>-| )2\1[\d]{3,3}\1[\d]{4,4}\b/g
    let matches = stringFromArray.matchAll(regex)
    let finalResArr = []
    for (let match of matches) {
        finalResArr.push(match[0])
    }
    console.log(finalResArr.join(", "))

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])