function coneRadius(radius, height) {

    let coneVolume = ((Math.PI * radius * radius) * height) / 3

    let coneSurfAreaBase = Math.PI * radius * radius
    let coneSurfAreaSide = (Math.PI * radius) * Math.sqrt(((radius * radius) + (height * height)))

    let coneTotalArea = coneSurfAreaBase + coneSurfAreaSide

    console.log(`volume = ${coneVolume.toFixed(4)}`)
    console.log(`area = ${coneTotalArea.toFixed(4)}`)
}
coneRadius(3.3, 7.8)