function circleArea(argument) {
    let area
    let type = typeof argument
    if (type === 'number') {
        area = Math.PI * Math.pow(argument, 2)
        console.log(area.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }

}
circleArea('as')