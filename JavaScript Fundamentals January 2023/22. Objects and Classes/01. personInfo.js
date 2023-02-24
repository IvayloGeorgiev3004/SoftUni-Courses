function personInfo(firstName, lastName, age) {
    let myPersonInfo = {};
    myPersonInfo.firstName = firstName;
    myPersonInfo.lastName = lastName;
    myPersonInfo.age = age;

    return myPersonInfo; 

}
personInfo("Peter", "Pan", "20")

function personInfo2(firstName, lastName, age) {
    let personInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
  

    return personInfo; 

}
personInfo2("Peter", "Pan", "20")