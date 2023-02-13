function SortAnArrayBy2Criteria(array) {
    array.sort((a, b) => a.length - b.length)

    console.log(array.join("\n"))
}
SortAnArrayBy2Criteria(['Deny', 'omen', 'test', 'Default'])