function heroicInventory(array) {
    // Initialize an empty array to store hero objects
    let finalHeroesArray = [];
    
    // Define the delimiter used to split the input strings
    let delimiter = " / ";

    // Iterate over each element in the input array
    array.forEach((element) => {
        // Split the input string into name, level, and items using the delimiter
        let [name, level, items] = element.split(delimiter);
        
        // Create a new hero object
        let hero = new Object();
        
        // Assign name and parse level as a number to the hero object
        hero.name = name;
        hero.level = Number(level);
        
        // Check if items are provided (items !== undefined)
        if (items !== undefined) {
            // Convert the items string to an array (split by ", ")
            hero.items = items.split(", ");
        } else {
            // If items are not provided, set hero.items as an empty array
            hero.items = [];
        }

        // Add the hero object to the final array
        finalHeroesArray.push(hero);
    });

    // Output the finalHeroesArray as a JSON string
    console.log(JSON.stringify(finalHeroesArray));
}

heroicInventory(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

function heroicInventory(array) {
    let finalHeroesArray = [];
    let delimiter = " / ";

    array.forEach((element) => {
        let [name, level, items] = element.split(delimiter);
        level = Number(level);
        items = items ? items = items.split(", ") : [];

        finalHeroesArray.push({ name, level, items });
    });

    console.log(JSON.stringify(finalHeroesArray));
}

heroicInventory([
    "Isacc / 25",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
