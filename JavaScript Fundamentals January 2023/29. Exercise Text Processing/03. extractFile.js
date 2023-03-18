function extractFile(string) {
    let arrFromString = string.split("\\")

    for (let words of arrFromString) {
        if (words.includes(".")) {
            let commands = words.split(".")
            if (commands.length === 2) {
                let name = words.split(".")[0]
                let fileExtension = words.split(".")[1]
                console.log(`File name: ${name}\nFile extension: ${fileExtension}`)
            } else {
                let fileExtension = commands.pop()
                let name = commands.join(".")
                console.log(`File name: ${name}\nFile extension: ${fileExtension}`)
            }

        }

    }
}
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx')