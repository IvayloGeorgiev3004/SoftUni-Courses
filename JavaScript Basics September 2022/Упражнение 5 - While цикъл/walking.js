function walking(input) {
    let stepsNeeded = 10000;
    let index = 0;
    let currentSteps = input[index]

    let stepsSum = 0;

    while (index < input.length) {
        if (currentSteps !== "Going home") {
            stepsSum += Number(currentSteps)
        } else {
            stepsSum += Number(input[index + 1])
            break;
        }

        index++
        currentSteps = input[index]
    }
    if (stepsSum >= stepsNeeded) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsSum - stepsNeeded} steps over the goal!`);
    } else {
        console.log(`${stepsNeeded - stepsSum} more steps to reach goal.`)
    }
}
walking(["125", "250", "4000", "30", "2678", "4682"])