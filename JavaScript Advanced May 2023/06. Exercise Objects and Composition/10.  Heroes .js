function solve() {
    // Returns an object with 'fighter' method
    return {
        // 'fighter' method creates a fighter object with given heroName
        fighter: function (heroName) {
            // Returns a fighter object with name, health, stamina, and fight method
            return {
                name: heroName, // Assigns the provided heroName to the 'name' property
                health: 100, // Sets initial health to 100
                stamina: 100, // Sets initial stamina to 100
                // 'fight' method decreases stamina and logs a message
                fight: function () {
                    this.stamina--; // Decreases stamina by 1
                    console.log(`${this.name} slashes at the foe!`); // Logs the fight message
                },
            };
        },

        // 'mage' method creates a mage object with given heroName
        mage: function (heroName) {
            // Returns a mage object with name, health, mana, and cast method
            return {
                name: heroName, // Assigns the provided heroName to the 'name' property
                health: 100, // Sets initial health to 100
                mana: 100, // Sets initial mana to 100
                // 'cast' method decreases mana and logs a casting message
                cast: function (spellName) {
                    this.mana--; // Decreases mana by 1
                    console.log(`${this.name} cast ${spellName}`); // Logs the casting message
                },
            };
        },
    };
}

// Invoke the 'solve' function to create the 'create' object with 'fighter' and 'mage' methods
let create = solve();

// Create a mage named "Scorcher" and cast spells
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball"); // Outputs: Scorcher cast fireball
scorcher.cast("thunder"); // Outputs: Scorcher cast thunder
scorcher.cast("light"); // Outputs: Scorcher cast light

// Create a fighter named "Scorcher 2" and make the fighter fight
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight(); // Outputs: Scorcher 2 slashes at the foe!

// Log the remaining stamina of the fighter and mana of the mage
console.log(scorcher2.stamina); // Outputs: 99 (stamina after one fight)
console.log(scorcher.mana); // Outputs: 97 (mana after three casts)
