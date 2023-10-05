function findPiesInArray(arrOfPies, startPie, endPie) {
    let finalPiesArray = [];

    let startIndex = arrOfPies.indexOf(startPie);
    let endIndex = arrOfPies.lastIndexOf(endPie);
    return finalPiesArray = arrOfPies.slice(startIndex, endIndex + 1)

}
findPiesInArray(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')

console.log(`-----------------------------`)

findPiesInArray(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie')