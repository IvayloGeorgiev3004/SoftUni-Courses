function secretChat(array) {
    let message = array.shift();
    let trigger = false;
    let index = 0;
    let lines = array[index]

    while (lines !== "Reveal") {
        let command = lines.split(":|:").shift();
        switch (command) {
            case "ChangeAll":
                let toReplace = lines.split(":|:")[1];
                let replaceWith = lines.split(":|:")[2];
                let newMessage = Array.from(message);
                newMessage.forEach(element => {
                    if (element === toReplace) {
                        newMessage.splice(newMessage.indexOf(element), 1, replaceWith)
                    }
                })
                message = newMessage.join("")
                console.log(message)
                break;
            case "Reverse":
                let word = lines.split(":|:")[1];
                if (message.includes(word)) {
                    wordCutAndReverse(word);
                    console.log(message);

                } else {
                    console.log("error");
                }
                break;
            case "InsertSpace":
                let index = Number(lines.split(":|:")[1]);
                message = message.substring(0, index) + " " + message.substring(index, message.length);
                console.log(message);
                break;
        }
        index++
        lines = array[index]
    }
    console.log(`You have a new text message: ${message}`)

    function wordCutAndReverse(someWord) {
        message = message.replace(someWord, "")
        let reversed = Array.from(someWord).reverse().join("");
        message = message + reversed;
    }
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])