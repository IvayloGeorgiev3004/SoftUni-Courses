function employee(array) {

    let employeeInfoObj = {}
    for (let personsInfo of array){
        let name = personsInfo
        let number = personsInfo.length
        employeeInfoObj[name] = number
        console.log(`Name: ${name} -- Personal Number: ${number}`)
    }
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])