
function generateSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let start = Math.max(0, i - k); // Calculate the starting index for the sum
        for (let j = start; j < i; j++) {
            sum += result[j];
        }
        result.push(sum);
    }

    return result;
}
// generateSequence(6, 3)
// ---------------------------
console.log(generateSequence(10, 2))