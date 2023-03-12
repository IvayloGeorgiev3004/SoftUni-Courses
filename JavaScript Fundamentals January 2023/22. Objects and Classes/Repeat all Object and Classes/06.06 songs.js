function songs(array) {
    class Songs {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.time = duration;
        }

    }

    let totalSongs = array.shift()
    debugger
    array.forEach(element => {
        let [typeList, name, duration] = element.split("_")
        debugger

    });

}
songs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite'])