function phoneShop(array) {
    let listOfPhones = array.shift().split(", ")

    for (let commandsToExecute of array) {
        commandsToExecute = commandsToExecute.split(" - ")
        let currentCommand = commandsToExecute.shift()

        switch (currentCommand) {
            case "Add": let phoneToAdd = commandsToExecute.shift();
                addPhone(phoneToAdd); break;
            case "Remove": let phoneToRemove = commandsToExecute.shift();
                removePhone(phoneToRemove); break;
            case "Bonus phone": commandsToExecute = commandsToExecute.toString().split(":")
                let oldPhone = commandsToExecute.shift(); let newPhone = commandsToExecute.shift();
                addBonusPhone(oldPhone, newPhone); break;
            case "Last": let phoneToBeLast = commandsToExecute.shift();
                addPhoneLastIfExists(phoneToBeLast); break;
            case "End": return console.log(listOfPhones.join(", "))
        }

    }

    function addPhone(phone) {
        if (listOfPhones.indexOf(phone) === -1) {
            listOfPhones.push(phone)
        }
    }

    function removePhone(phone) {
        if (listOfPhones.indexOf(phone) !== -1) {
            let indexToRemove = listOfPhones.indexOf(phone)
            listOfPhones.splice(indexToRemove, 1)
        }
    }

    function addBonusPhone(oldPhone, newPhone) {
        if (listOfPhones.indexOf(oldPhone) !== -1) {
            let atIndexToAdd = listOfPhones.indexOf(oldPhone)
            listOfPhones.splice(atIndexToAdd + 1, 0, newPhone)
        }
    }

    function addPhoneLastIfExists(phone) {
        if (listOfPhones.includes(phone)) {
            let indexOfPhone = listOfPhones.indexOf(phone)
            listOfPhones.push(phone)
            listOfPhones.splice(indexOfPhone, 1)
        }
    }

}
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",

"Last - SamsungA50",

"Add - MotorolaG5",

"End"])