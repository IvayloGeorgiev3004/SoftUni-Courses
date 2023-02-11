// function lastKNumbersSequence(n, k) {
//     let sum = 0;
//     let newArray = []
//     newArray.push(1)

//     for (let i = 0; i < n - 1; i++) {
//         if (i >= k - 1) {
//             sum = 0;
//             for (let j = newArray.length - k; j < newArray.length; j++) {
//                 sum += newArray[j]
//             }
//             newArray.push(sum)
//         } else {
//             sum += newArray[i]
//             newArray.push(sum)
//         }

//     }
//     console.log(newArray.join(" "))
// }
// lastKNumbersSequence(8, 7)


// function lastKNumbersSequence2(n, k) {
//     let result = [1];

//     for (let i = 1; i < n; i++) {
//         let startIndex = Math.max(0, i - k);
//         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
//         result.push(currentElement);
//     }

//     console.log(result.join(" "));
// }
// lastKNumbersSequence2(8, 2)

function generic(n, k) {
    let result = [1, 1, 2]
    for (let i = 3; i < n; i++) {
        let sequenceNum = result.slice(-k)
        let total = 0;
        for (let el of sequenceNum) {
            total += el
        }
        result.push(total)
    }
    console.log(result.join(" "))
}
generic(6,3)