function createCar(carObject) {
  if (carObject.power <= 90) {
    carObject.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (carObject.power <= 120) {
    carObject.engine = {
      power: 120,
      volume: 2400,
    };
  } else {
    carObject.engine = {
      power: 200,
      volume: 3500,
    };
  }
  delete carObject.power;

  carObject.carriage = {
    type: carObject.carriage,
    color: carObject.color,
  };
  delete carObject.color;

  let wheels = function (number) {
    number = number % 2 !== 0 ? number : number + 1;
    return new Array(4).fill(number);
  };

  carObject.wheelsize = wheels(carObject.wheelsize);

  console.table(carObject);
}
createCar({model: "Opel Vectra", power: 91, color: "grey", carriage: "coupe", wheelsize: 17});
