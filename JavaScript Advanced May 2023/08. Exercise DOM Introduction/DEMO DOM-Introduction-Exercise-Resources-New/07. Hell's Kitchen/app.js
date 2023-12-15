function solve() {
  document.querySelector("#btnSend").addEventListener("click", handleButtonClick);

  function handleButtonClick() {
    // GET THE NEEDED TEXT AREAS OF THE HTML: (PARSE the input)
    let userInput = JSON.parse(document.querySelector("#inputs textarea").value);
    let bestRestaurantOutputTag = document.querySelector("#bestRestaurant p");
    let bestWorkersSpan = document.querySelector("#workers p");

    let restaurantsData = [];

    for (let restaurantInfo of userInput) {
      let [restaurantName, workersInfo] = restaurantInfo.split(" - ");
      let workers = workersInfo.split(", ");
      let workersData = workers.map((workerInfo) => {
        let [workerName, salary] = workerInfo.split(" ");
        salary = Number(salary);
        
        return {name: workerName, salary};
      });
      if (restaurantsData.includes(restaurantName)){
debugger
      } else {
        restaurantsData.push({name: restaurantName, workers: workersData});

      }
    }

    // check and add Average Salary

    let highestAverageSalary = 0;
    let bestRestaurantName = "";
    let bestWorkerSalary = 0;

    for (let currentRestaurant of restaurantsData) {
      let totalWorkers = currentRestaurant.workers.length;
      let totalSalary = currentRestaurant.workers.reduce((accumulator, currentWorker) => {
        return accumulator + currentWorker.salary;
      }, 0);
      let averageSalary = totalSalary / totalWorkers;

      if (highestAverageSalary < averageSalary) {
        bestRestaurantName = currentRestaurant.name;
        highestAverageSalary = averageSalary;
      }
    }

    for (let currentRestaurant of restaurantsData) {
      if (currentRestaurant.name === bestRestaurantName) {
        let currentBestWorkerSalary = currentRestaurant.workers.reduce((accumulator, nextWorker) => {
          if (bestWorkerSalary < accumulator.salary) {
            bestWorkerSalary = accumulator.salary;
          } else if (bestWorkerSalary < nextWorker.salary) {
            bestWorkerSalary = nextWorker.salary;
          }
          return bestWorkerSalary;
        }, 0);
        bestWorkerSalary = currentBestWorkerSalary;
      }
    }
    let bestWorkersSpanResult = "";
    bestWorkerSalary = bestWorkerSalary.toFixed(2);
    highestAverageSalary = highestAverageSalary.toFixed(2);
    for (let currentRestaurant of restaurantsData) {
      let sortedWorkers = currentRestaurant.workers;
      sortedWorkers.sort((a, b) => b.salary - a.salary);

      if (currentRestaurant.name === bestRestaurantName) {
        currentRestaurant.workers.forEach((worker) => {
          bestWorkersSpanResult += `Name: ${worker.name} With Salary: ${worker.salary} `;
        });
      }
    }
    let bestRestTagP = `Name: ${bestRestaurantName} Average Salary: ${highestAverageSalary} Best Salary: ${bestWorkerSalary}`;
    bestWorkersSpan.textContent = bestWorkersSpanResult;
    bestRestaurantOutputTag.textContent = bestRestTagP;
  }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
// ["Mikes - Steve 1000, Ivan 200, Paul 800","Mikes - Maria 850, Janet 650"]
