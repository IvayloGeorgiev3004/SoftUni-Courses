function employee(array) {

    array.forEach(element => {
        let personInfo = {};
        personInfo.name = element
        personInfo.number = element.length
        console.log(personInfo)
    });


}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
