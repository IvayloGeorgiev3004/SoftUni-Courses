// function convertToJSON(firstName, lastName,hairColor){
//     class Person {
//         constructor(firstName, lastName, hairColor) {
//             this.name = firstName;
//             this.lastName = lastName;
//             this.hairColor = hairColor;
//         }
//     }
//     let personInfo = new Person(firstName, lastName, hairColor)
//     let JSONfromObject = JSON.stringify(personInfo)
//     console.log(JSONfromObject)

// }
// convertToJSON('George', 'Jones', 'Brown')

function convertToJSON2(firstName, lastName,hairColor){
    let object = {
        firstName,
        lastName,
        hairColor,
    }
    let JSONfromObject = JSON.stringify(object)
    console.log(JSONfromObject)

}
convertToJSON2('George', 'Jones', 'Brown')