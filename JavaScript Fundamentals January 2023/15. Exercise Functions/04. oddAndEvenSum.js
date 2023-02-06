function oddAndEvenSum(singleNumber) {

    function sumIntegerOddNumbers(singleNumber) {
        let numberIntoString = singleNumber.toString()
        let functionResult = 0;

        for (let i = 0; i < numberIntoString.length; i++) {
            let oddNum = Number(numberIntoString[i])
            if (oddNum % 2 !== 0) {
                functionResult += Number(numberIntoString[i])
            }
        }
        return functionResult;
    }


    function sumIntegerEvenNumbers(singleNumber) {
        let numberIntoString = singleNumber.toString()
        let functionResult2 = 0;

        for (let i = 0; i < numberIntoString.length; i++) {
            let oddNum = Number(numberIntoString[i])
            if (oddNum % 2 === 0) {
                functionResult2 += Number(numberIntoString[i])
            }
        }

        return functionResult2;
    }

    return `Odd sum = ${sumIntegerOddNumbers(singleNumber)}, Even sum = ${sumIntegerEvenNumbers(singleNumber)}`

}
oddAndEvenSum(1000435)