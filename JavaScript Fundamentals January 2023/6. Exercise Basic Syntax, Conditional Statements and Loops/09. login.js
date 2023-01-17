function login(input) {
    let userName = input[0];
    let wrongPassCount = 0;
    let password = ""

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i] + ""
    }

    for (let i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${userName} logged in.`)
        } else {
            wrongPassCount++
            if (wrongPassCount === 4) {
                console.log(`User ${userName} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }
    }

}
/* login(['Acer', 'login', 'go', 'let me in', 'recA'])
console.log(`----------------------------`)
login(['momo', 'omom'])
console.log(`----------------------------`) */

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
