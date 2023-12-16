function solve() {
  document.querySelector("#btnSend").addEventListener("click", handleButtonClick);

  function handleButtonClick() {
    // GET THE NEEDED TEXT AREAS OF THE HTML: (PARSE the input)
    let userInput = JSON.parse(document.querySelector("#inputs textarea").value);
    let bestRestaurantOutputTag = document.querySelector("#bestRestaurant p");
    let bestWorkersSpan = document.querySelector("#workers p");

    // Array to store organized restaurant and worker data
    let restaurantsData = [];

    // Process each restaurant's information from user input
    for (let restaurantInfo of userInput) {
      // Split restaurant name and workers' information
      let [restaurantName, workersInfo] = restaurantInfo.split(" - ");
      // Split workers' information into an array
      let workers = workersInfo.split(", ");
      // Map workers' data to an array of objects
      let workersData = workers.map((workerInfo) => {
        let [workerName, salary] = workerInfo.split(" ");
        salary = Number(salary);

        return { name: workerName, salary };
      });

      // Check if the restaurant already exists in the data array
      if (restaurantsData.length === 0) {
        // If not, create a new entry
        restaurantsData.push({
          name: restaurantName,
          workers: workersData,
        });
      } else {
        // If yes, add workers to the existing entry
        restaurantsData.forEach((restaurant, index) => {
          if (restaurant.name === restaurantName) {
            workersData.forEach((worker) => {
              restaurantsData[index].workers.push(worker);
            });
          } else {
            // If the restaurant doesn't exist, create a new entry
            let isTrue = restaurantsData.some((rest) => {
              return rest.name === restaurantName;
            });
            if (!isTrue) {
              restaurantsData.push({
                name: restaurantName,
                workers: workersData,
              });
            }
          }
        });
      }
    }

    // Variables to store the best restaurant's information
    let highestAverageSalary = 0;
    let bestRestaurantName = "";
    let bestWorkerSalary = 0;

    // Calculate average salary for each restaurant and find the best one
    for (let restaurant of restaurantsData) {
      let totalWorkers = restaurant.workers.length;
      let totalSalary = restaurant.workers.reduce(
        (accumulator, worker) => accumulator + worker.salary,
        0
      );
      let averageSalary = totalSalary / totalWorkers;

      if (highestAverageSalary < averageSalary) {
        bestRestaurantName = restaurant.name;
        highestAverageSalary = averageSalary;
      }
    }

    // Find the highest salary among all workers in the best restaurant
    for (let restaurant of restaurantsData) {
      if (restaurant.name === bestRestaurantName) {
        let currentBestWorkerSalary = restaurant.workers.reduce(
          (accumulator, worker) => {
            if (bestWorkerSalary < accumulator.salary) {
              bestWorkerSalary = accumulator.salary;
            } else if (bestWorkerSalary < worker.salary) {
              bestWorkerSalary = worker.salary;
            }
            return bestWorkerSalary;
          }, 0);
        bestWorkerSalary = currentBestWorkerSalary;
      }
    }

    // Variable to store the formatted result of workers' details
    let bestWorkersSpanResult = "";
    bestWorkerSalary = bestWorkerSalary.toFixed(2);
    highestAverageSalary = highestAverageSalary.toFixed(2);

    // Sort workers by salary in descending order for the best restaurant
    for (let restaurant of restaurantsData) {
      let sortedWorkers = restaurant.workers;
      sortedWorkers.sort((a, b) => b.salary - a.salary);

      // Display workers' details for the best restaurant
      if (restaurant.name === bestRestaurantName) {
        restaurant.workers.forEach((worker) => {
          bestWorkersSpanResult += `Name: ${worker.name} With Salary: ${worker.salary} `;
        });
      }
    }

    // Formatted output for the best restaurant
    let bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${highestAverageSalary} Best Salary: ${bestWorkerSalary}`;

    // Display results in HTML elements
    bestWorkersSpan.textContent = bestWorkersSpanResult;
    bestRestaurantOutputTag.textContent = bestRestaurantOutput;
  }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 500, Joe 300, Jane 800"]
// ["Mikes - Steve 1000, Ivan 200, Paul 800","Mikes - Maria 850, Janet 2000"]
// ["Mikes - Steve 1000, Jensen 2000, Paul 3000","Mikes - Maria 2200, Janet 3000","McDonald's - Spas 1500, Ivan 2500","Mikes - IvoG 4000, Zlati 3000"]
