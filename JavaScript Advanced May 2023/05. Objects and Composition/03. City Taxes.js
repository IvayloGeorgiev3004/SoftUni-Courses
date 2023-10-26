function cityTaxes(name, population, treasury) {
    let obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += (this.population * percentage) / 100;
        },
        applyRecession(percentage) {
            this.treasury -= (this.treasury * percentage) / 100;
        },
    };

	obj.babies = function (a,b){
		return this.population+=( population + a) + b
	}

    return obj;
}
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
city.babies(2,2)
console.log(city.population);
city.applyRecession(5);
console.log(city.treasury);
