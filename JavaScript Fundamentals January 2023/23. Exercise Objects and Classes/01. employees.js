function employees(array) {
    class EmployeeInformation {
        constructor(name, phoneNumber) {
            this.name = name;
            this.number = phoneNumber;
        }
    }
    for (let info of array) {
        let name = info;
        let number = Number(info.length)
        let newPerson = new EmployeeInformation(name, number)
        debugger
        console.log(`Name: ${newPerson.name} -- Personal Number: ${newPerson.number}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])