function greetingByName (input){
    let name = input[0];
    let res = "Hello, " + name + "!";
    console.log(res);
}
greetingByName(["Niki"]);

function greetByName2(input){
    let name = input[0];
    console.log(`Hello, ${name}!`);
}
greetByName2(["Niki"]);