function songs(array) {
    let numberOfSongs = Number(array.shift());
    let typeOfSongs = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
        callSongNames() {
            console.log(this.name)
        }
    }

    for (let playList of array) {
        let [type, name, time] = playList.split("_")
        let songs = new Song(type, name, time)
        if (typeOfSongs === "all") {
            songs.callSongNames()
        } else if (typeOfSongs === songs.type) {
            songs.callSongNames()
        }
    }

}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])