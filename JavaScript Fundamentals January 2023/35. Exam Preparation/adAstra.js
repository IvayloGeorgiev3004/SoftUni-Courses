function adAstra(arrayString) {
    let regex = /([|#])(?<product>[A-Za-z\s]+)\1(?<expirationDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>\d+)\1/g;
    let neededCaloriesPerDay = 2000;
    let totalCalories = 0;
    arrayString.forEach(element => {
        let matches = regex.exec(element)
        while (matches !== null) {
            let calories = Number(matches.groups["calories"]);
            totalCalories += calories
            matches = regex.exec(element)
        }

    });
    console.log(`You have food to last you for: ${Math.floor(totalCalories / neededCaloriesPerDay)} days!`)

    for (let i = 0; i < arrayString.length; i++) {
        let matchAll = arrayString[i].matchAll(regex)
        for (let products of matchAll) {
            console.log(`Item: ${products.groups.product}, Best before: ${products.groups.expirationDate}, Nutrition: ${products.groups.calories}`)
        }
    }
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])


// function astra (input){
//     let regexFindProduct = /(?<del>[|#])+(?<itemName>[A-Za-z]+)\k<del>+(?<expirationDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\k<del>+(?<calories>[0-9]{1,5})/g
//     let counter = 0;
//     let match = regexFindProduct.exec(input)
//     let allCalories = 0;
//     let allItems = {};
//     while (match !=null){
//         allCalories+=Number( match.groups.calories)
//         counter++
//         allItems[match.groups.itemName]= [[match.groups.expirationDate],[match.groups.calories]]
//         match = regexFindProduct.exec(input)
//     }
    
//     let day = allCalories /2000
    
//     console.log(`You have food to last you for: ${Math.floor(day)} days!`);
//     for (const key in allItems) {
        
//         console.log(`Item: ${key}, Best before: ${allItems[key][0]}, Nutrition: ${allItems[key][1]}`);
            
//         }
//     }
//     astra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
