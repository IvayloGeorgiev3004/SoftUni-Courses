function addressBook(array) {

    let addressBookObj = {}
    for (let commands of array) {
        let [personName, address] = commands.split(":")
        addressBookObj[personName] = address
    }
    let sortedAddressBook = Object.entries(addressBookObj)
    sortedAddressBook.sort((a, b) => {
        a[0].localeCompare(b[0])
    })
    let sorted = Object.entries(addressBookObj).sort((a, b) => a[0].localeCompare(b[0]))

    for (let results of sorted) {
        console.log(`${results[0]} -> ${results[1]}`)
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])