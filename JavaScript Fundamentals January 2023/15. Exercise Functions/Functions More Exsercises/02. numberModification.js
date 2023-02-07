function numberModification(number) {
    number = number.toString()
    let buffNUmber = 0;

    for (let i = 0; i < 1; i++) {

        for (let j = 0; j < number.length; j++) {
            buffNUmber += Number(number[j])
        }

        if ((buffNUmber / number.length) < 5) {
            i--
            number += 9
            buffNUmber = 0;
        } else {
            break;
        }

    }
    console.log(number)
}
numberModification(5835)