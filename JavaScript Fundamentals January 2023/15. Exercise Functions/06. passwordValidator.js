function passwordValidator(password) {
    let index = 0;
    let lengthValidator = false;
    let twoDigitsCounter = 0;
    let onlyLettersAndDigitsValidator = 0;;
    let onlyLetAndNumFlag = false;
    while (index < password.length) {
        if (password.length < 6 || password > 10) {
            if (lengthValidator === false) {
                lengthValidator = true;
                console.log(`Password must be between 6 and 10 characters`)
                continue;
            }

        }

        let currentChar = password[index]
        currentChar = currentChar.charCodeAt(0)
        if (currentChar >= 48 && currentChar <= 57) {
            twoDigitsCounter++
        }
        if (twoDigitsCounter < 2 && index === password.length - 1) {
            console.log(`Password must have at least 2 digits`)
            index++
            continue;
        }
        if (currentChar >= 48 && currentChar <= 57 || currentChar >= 65 && currentChar <= 90 || currentChar >= 97 && currentChar <= 122) {

        } else {
            onlyLettersAndDigitsValidator++
        }

        if (onlyLettersAndDigitsValidator !== 0) {
            if (onlyLetAndNumFlag === false) {
                onlyLetAndNumFlag = true;
                console.log(`Password must consist only of letters and digits`)
                continue;
            }

        }
        index++
    }


    if (lengthValidator === false && onlyLettersAndDigitsValidator === 0 && twoDigitsCounter >= 2) {
        console.log(`Password is valid`)
    }

}
passwordValidator('Pa$s$s')