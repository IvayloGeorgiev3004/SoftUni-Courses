function convertToJSON(name, lastName, hairColor) {
    let personInfo = {
        name,
        lastName,
        hairColor,
    }
    let JSONfromObject = JSON.stringify(personInfo)
    console.log(JSONfromObject)
    debugger

}
convertToJSON('Peter', 'Smith', 'Blond')