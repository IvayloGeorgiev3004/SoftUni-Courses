// function inventory(inventoryArray) {
//     let arrOfHeroes = [];

//     for (let heroes of inventoryArray) {
//         let [heroName, heroLevel, heroItems] = heroes.split(" / ");
//         heroLevel = Number(heroLevel);
//         let heroesObject = {
//             heroName,
//             heroLevel,
//             heroItems,
//         }
//         arrOfHeroes.push(heroesObject)
//     }
//     arrOfHeroes.sort((hero, hero2) => hero.heroLevel - hero2.heroLevel)

//     for (let heroes of arrOfHeroes) {

//         console.log(`Hero: ${heroes.heroName}`)
//         console.log(`level => ${heroes.heroLevel}`)
//         console.log(`items => ${heroes.heroItems}`)
//     }

// }
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ])



function inventory2(inventoryArray) {
    let arrOfHeroes = [];

    class Heroes {
        constructor(name, level, item) {
            this.name = name;
            this.level = level;
            this.item = item;
        }
    }

    for (let heroes of inventoryArray) {
        let [heroName, heroLevel, heroItems] = heroes.split(" / ");
        heroLevel = Number(heroLevel);

        let classHeroes = new Heroes(heroName, heroLevel, heroItems)
        arrOfHeroes.push(classHeroes)
    }
    debugger
    arrOfHeroes.sort((hero, hero2) => hero.level - hero2.level)
    arrOfHeroes.forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.item}`))

}
inventory2([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])