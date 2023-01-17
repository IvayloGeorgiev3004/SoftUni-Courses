function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    let distance1 = x2 - x1;
    let distance2 = y2 - y1;
    let result1 = ( Math.pow(distance1, 2)) + (Math.pow(distance2, 2))

    console.log(Math.sqrt(result1))


    

}
distanceBetweenTwoPoints(2, 4, 5, 0)