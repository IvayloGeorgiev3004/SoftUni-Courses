function addressBook(array) {
    let addressBookObj = {}

    array.forEach(element => {
        let [name, address] = element.split(":")
        addressBookObj[name] = address;
    });

    let sorted = Object.entries(addressBookObj).sort((a, b) => a[0].localeCompare(b[0]))

    sorted.forEach(element => {
        let [key, value] = element.join(",").split(',')
        console.log(`${key} -> ${value}`)
    })

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

function addressBook(array) {
    let addressBookObj = {}

    array.forEach(element => {
        let [name, address] = element.split(":")
        addressBookObj[name] = address;
    });

    let sorted = Object.entries(addressBookObj).sort(([keyA, ValueA], [keyB, valueB]) => {
        keyA.localeCompare(keyB)
    }) //  ДЕСТРУКТУРИРАНЕ

    //     let sorted = Object.entries(addressBookObj).sort((a, b) => a[0].localeCompare(b[0])) 


    sorted.forEach(element => {
        let [key, value] = element.join(",").split(',')
        console.log(`${key} -> ${value}`)
    })

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