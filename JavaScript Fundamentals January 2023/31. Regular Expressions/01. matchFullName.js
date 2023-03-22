function matchFullName(string) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validNames = regex.exec(string)
    let finalResult = []

    while (validNames !== null) {
        finalResult.push(validNames[0])
        validNames = regex.exec(string)
    }
    console.log(`${finalResult.join(" ")}`)
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov")