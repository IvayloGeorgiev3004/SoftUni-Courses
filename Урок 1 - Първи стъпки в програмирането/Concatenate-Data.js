function concatenate(input){
    let name = input[0];
    let family = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${name} ${family}, a ${age}-years old person from ${city}.`)
    
}
concatenate(["Maria", "Ivanova", 20, "Sofia"])

function concatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3]
    console.log("You are " + firstName + " " + lastName + "," + " " + "a" + " " + age + "-years old person from" + " " + town + ".");
}
concatenateData(["Maria", "Ivanova", 20, "Sofia"])