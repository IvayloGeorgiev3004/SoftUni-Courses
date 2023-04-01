function ActivationKeys(array) {
    let decryptedKey = array.shift();

    for (let results of array) {
        if (results === "Generate") {
            console.log(`Your activation key is: ${decryptedKey}`)
            break;
        }
        let tokens = results.split(">>>");
        let command = tokens.shift();
        switch (command) {
            case "Slice": {
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                deleteElements(startIndex, endIndex)
                break;
            }
            case "Flip": {
                let UpperOrLowerCase = tokens[0]
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                changeCharsCase(UpperOrLowerCase, startIndex, endIndex);
                break;
            }
            case "Contains": {
                let substring = tokens[0];
                isTextIncluding(substring)
            }
        }
    }

    function deleteElements(startIndex, endIndex) {
        decryptedKey = decryptedKey.substring(0, startIndex) + "" + decryptedKey.substring(endIndex, decryptedKey.length)
        console.log(decryptedKey)
    }

    function changeCharsCase(UpOrLow, startIndex, endIndex) {
        if (UpOrLow === "Upper") {
            let upperCaseWord = decryptedKey.substring(startIndex, endIndex).toUpperCase()
            decryptedKey = decryptedKey.substring(0, startIndex) + upperCaseWord + decryptedKey.substring(endIndex, decryptedKey.length)
        } else if (UpOrLow === "Lower") {
            let lowerCaseWord = decryptedKey.substring(startIndex, endIndex).toLowerCase()
            decryptedKey = decryptedKey.substring(0, startIndex) + lowerCaseWord + decryptedKey.substring(endIndex, decryptedKey.length)
        }
        console.log(decryptedKey)
    }

    function isTextIncluding(substring) {
        if (decryptedKey.includes(substring)) {
            console.log(`${decryptedKey} contains ${substring}`)
        } else {
            console.log(`Substring not found!`)
        }
    }

}
ActivationKeys((["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]))