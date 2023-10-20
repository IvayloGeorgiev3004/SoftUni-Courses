function pieceOfPay(arrayOfPies, startPie, endPie) {
    
    // Find the index of the first occurrence of startPie in arrayOfPies.
    let startIndex = arrayOfPies.indexOf(startPie);
    
    // Find the index of the last occurrence of endPie in arrayOfPies.
    let endIndex = arrayOfPies.lastIndexOf(endPie);
    
    // Create an empty array to store the final selection of pies.
    let finalPieArray = [];

    // Iterate through the arrayOfPies using a for loop.
    for (let i = 0; i < arrayOfPies.length; i++) {
        // Check if the current index (i) is within the range of startIndex and endIndex.
        if (i >= startIndex && i <= endIndex) {
            // If the current index is within the range, push the pie at that index to finalPieArray.
            finalPieArray.push(arrayOfPies[i]);
        }
    }

    // Return the array containing the selected range of pies.
    return finalPieArray;
}
pieceOfPay(['Pumpkin Pie',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Key Lime Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')