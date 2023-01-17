function password(input) {
    let name = input[0];
    let password = input[1];

    let index = 2;
    let checkPassword = input[index]

    while (checkPassword !== password) {
        index++
        checkPassword = input[index]
    }

    if (password === checkPassword) {
        console.log(`Welcome ${name}!`)
    }

}
password(["Nakov",

    "1234",

    "Pass",

    "1324",

    "1234"])