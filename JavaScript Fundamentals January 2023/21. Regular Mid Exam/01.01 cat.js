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
cat([5, 10, 12, 5, 4, 20], 3, "cheap")


function catTest(arr, index, itemsValue) {
    let leftSide = arr.splice(0, index)
    let rightSide = arr.splice(1, arr.length - 1)
    let priceTag = Number(arr[0])

    let finalSumLeft = 0;
    let finalSumRight = 0;

    switch (itemsValue) {
        case "cheap":
            let leftSidePrice = leftSide.filter(element => element < priceTag)
            let rightSidePrice = rightSide.filter(element => element < priceTag)
            finalSumLeft = leftSidePrice.reduce((a, b) => a + b, 0)
            finalSumRight = rightSidePrice.reduce((a, b) => a + b, 0)
            break;
        case "expensive":
            let leftSidePriceExp = leftSide.filter(element => element >= priceTag)
            let rightSidePriceExp = rightSide.filter(element => element >= priceTag)
            finalSumLeft = leftSidePriceExp.reduce((a, b) => a + b, 0)
            finalSumRight = rightSidePriceExp.reduce((a, b) => a + b, 0)
            break;
    }

    if (finalSumLeft >= finalSumRight) {
        console.log(`Left - ${finalSumLeft}`)
    } else {
        console.log(`Right - ${finalSumRight}`)
    }


}
catTest([-2, 2, 1, 5, 9, 3, 2 - 2, 1, -1, -3, 3], 7, "expensive")