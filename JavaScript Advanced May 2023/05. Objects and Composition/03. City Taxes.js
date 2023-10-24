function cityTaxes(name, population, treasury) {
	let obj = {
		CityName: name,
		CityPopulation: population,
		CityTreasury: treasury,
		taxRate: 10,
		collectTaxes() {
			this.CityTreasury += this.CityPopulation * this.taxRate;
		},
		applyGrowth(percentage) {},
	};

	return obj;
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city);
