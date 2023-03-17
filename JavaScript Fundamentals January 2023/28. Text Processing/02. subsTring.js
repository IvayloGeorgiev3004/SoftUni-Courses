function substring(word, startIndex, count) {
    let endIndex = startIndex + count
    let result = word.substring(startIndex, endIndex)
    console.log(result)
}
    substring('SkipWord', 4, 7)