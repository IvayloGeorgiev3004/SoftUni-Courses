function catWalking(input){
    let minutesWalkingPerDay = input[0];
    let walkingCount = input[1];
    let caloriesPerDay = input[2];

    let walkingTimeInMinutes = minutesWalkingPerDay * walkingCount
    let totalCaloriesBurnedPerDay = 5 * walkingTimeInMinutes
    let caloriesRemainng = caloriesPerDay / 2

    if (totalCaloriesBurnedPerDay >= caloriesRemainng){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurnedPerDay}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurnedPerDay}.`)    
    }
    

}
catWalking([15, 2, 500])