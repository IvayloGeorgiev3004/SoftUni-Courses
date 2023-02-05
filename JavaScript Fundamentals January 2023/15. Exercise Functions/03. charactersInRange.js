function charactersInRange(char1, char2) {
    let start = char1.charCodeAt(0) // връща номер отговаряш на символа
    let end = char2.charCodeAt(0) // връща номер отговаряш на символа

    let finalResult = []; // празен масив, в който да пълним резултата
    if (start < end) {
        for (let i = start + 1; i < end; i++) {    
            finalResult.push(String.fromCharCode(i))
        }
    } else if (start > end) {
        for (let j = end + 1 ; j < start; j++) {
            finalResult.push(String.fromCharCode(j))
        }
    }

    return finalResult.join(" ")
}
console.log(charactersInRange('C',
    '#'))