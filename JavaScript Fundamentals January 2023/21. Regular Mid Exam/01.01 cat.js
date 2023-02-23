function cat(array, entryIndex, typeOfItems) {

    switch (typeOfItems) {
        case "cheap": console.log(checkCheap(array, entryIndex)); break;
        case "expensive": console.log(checkExpensive(array, entryIndex)); break;
    }

    function checkCheap(array, entryIndex) {
        let priceTag = Number(array[entryIndex])
        let rightPrice = 0;
        let leftPrice = 0;
        for (let i = entryIndex + 1; i < array.length; i++) {
            if (Number(array[i]) < priceTag)
                rightPrice += Number(array[i])
        }
        for (let j = 0; j < entryIndex; j++) {
            if (Number(array[j]) < priceTag)
                leftPrice += Number(array[j])
        }
        if (leftPrice >= rightPrice) {
            return `Left - ${leftPrice}`

        } else {
            return `Right - ${rightPrice}`
        }
    }

    function checkExpensive(array, entryIndex) {
        let priceTag = Number(array[entryIndex])
        let rightPrice = 0;
        let leftPrice = 0;
        for (let i = entryIndex + 1; i < array.length; i++) {
            if (Number(array[i]) >= priceTag)
                rightPrice += Number(array[i])
        }
        for (let j = 0; j < entryIndex; j++) {
            if (Number(array[j]) >= priceTag)
                leftPrice += Number(array[j])
        }
        if (leftPrice >= rightPrice) {
            return "Left - " + leftPrice
        } else {
            return "Right - " + rightPrice
        }

    }

}
cat([5,10,12,5,4,20], 3, "cheap")
