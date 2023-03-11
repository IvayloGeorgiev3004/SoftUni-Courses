function phoneBook(array) {
    let personInfo = {};

    array.forEach(element => {
        let commands = element.split(" ")
        debugger
        let name = commands.shift()
        let phoneNumber = commands.shift()
        personInfo[name] = phoneNumber
    });

    for (let [name, phoneNumber] of Object.entries(personInfo)) {
        console.log(`${name} -> ${phoneNumber}`)
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])