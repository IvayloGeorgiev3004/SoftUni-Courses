function createHeroes(array) {
  let separator = " / ";
  let heroesArray = [];

  for (let hero of array) {
    let [name, level, items] = hero.split(separator);
    items = items === undefined ? [] : items.split(", ");
    level = Number(level);
    let heroObj = {name, level, items};
    heroesArray.push(heroObj);
  }
  return JSON.stringify(heroesArray);
}
console.log(createHeroes(['Isacc / 25 / Apple, GravityGun', 
'Derek / 12 / BarrelVest, DestructionSword', 
'Hes / 1 / Desolator, Sentinel, Antara'] ));
