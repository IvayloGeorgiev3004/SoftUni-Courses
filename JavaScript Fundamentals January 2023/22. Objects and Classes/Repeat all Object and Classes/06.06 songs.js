function songs(array) {
    class Songs {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.time = duration;
        }

    }

    let finalArray = []
    let totalSongs = array.shift()
    let finalTypeList = ""
    for (let i = 0; i < array.length; i++) {
        let [typeList, name, duration] = array[i].split("_")
        if (i === array.length - 1) {
            finalTypeList = array[i]
        } else {
            let song = new Songs(typeList, name, duration)
            finalArray.push(song)
        }

    }
    if (finalTypeList === "all") {
        finalArray.forEach(element => {
            console.log(`${element.name}`)
        })
    } else {
        finalArray.forEach(element => {
            if (element.typeList === finalTypeList) {
                console.log(`${element.name}`)
            }
        })
    }

}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])