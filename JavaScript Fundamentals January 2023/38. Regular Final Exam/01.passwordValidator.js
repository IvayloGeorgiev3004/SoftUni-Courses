function passwordValidator(array) {
    let userPassword = array.shift();

    for (let line of array) {
        if (line === "Complete") {
            break;
        }
        let tokens = line.split(" ");
        let command = tokens.shift();
        switch (command) {
            case "Insert": {
                let index = Number(tokens[0])
                if (index < 0 || index > userPassword.length) {
                    continue;
                } else {
                    let replacement = tokens[1];
                    userPassword = userPassword.substring(0, index) + replacement + userPassword.substring(index, userPassword.length);
                    console.log(userPassword)
                }

                break;
            }
            case "Replace": {
                let char = tokens[0];
                let charValue = char.charCodeAt(0);
                let value = Number(tokens[1]);
                let newCharValue = charValue + value;
                let newChar = String.fromCharCode(newCharValue)
                if (userPassword.includes(char)) {
                    userPassword = userPassword.split(char).join(newChar);
                    console.log(userPassword);
                }
                break;
            }
            case "Make": {
                if (tokens[0] === "Lower") {
                    let index = Number(tokens[1]);
                    let charToLowerCase = userPassword.substring(index, index + 1).toLowerCase();
                    userPassword = userPassword.substring(0, index) + charToLowerCase + userPassword.substring(index + 1, userPassword.length);
                    console.log(userPassword)
                    debugger
                } else if (tokens[0] === "Upper") {
                    let index = Number(tokens[1]);
                    let charToUpperCase = userPassword.substring(index, index + 1).toUpperCase();
                    userPassword = userPassword.substring(0, index) + charToUpperCase + userPassword.substring(index + 1, userPassword.length);
                    console.log(userPassword)
                    debugger
                }
                break;
            }
            case "Validation": {
                if (userPassword.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                }
                let lettersCheckRegex = /^(\w)+$/g
                let lettersMatch = userPassword.match(lettersCheckRegex);
                if (!lettersMatch) {
                    console.log(`Password must consist only of letters, digits and _!`)
                }
                let upperCaseCheck = /[A-Z]{1,}/g
                let upperCaseMatch = userPassword.match(upperCaseCheck);
                if (!upperCaseMatch) {
                    console.log(`Password must consist at least one uppercase letter!`)
                }
                let lowerCaseCheck = /[a-z]{1,}/g;
                let lowerCaseMatch = userPassword.match(lowerCaseCheck);
                if (!lowerCaseMatch) {
                    console.log(`Password must consist at least one lowercase letter!`)
                }
                let digitsCheck = /[0-9]{1,}/g;
                let digitsMatch = userPassword.match(digitsCheck);
                if (!digitsMatch) {
                    console.log(`Password must consist at least one digit!`)
                }

            }
            default: continue;
        }
    }

}
passwordValidator(['invalidpassword*',

    'Add 2 p',
    'Test 2 p',
    'Test 2 p',
    'Insert 3 R',
    'Validation',

    'Complete'])

// passwordValidator(['123456789',

//     'Insert 3 R',

//     'Replace 5 15',

//     'Validation',

//     'Make Lower 3',

//     'Complete'])