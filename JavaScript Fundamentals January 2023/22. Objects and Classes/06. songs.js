function songs(array) {
    let songsNumber = Number(array.shift())
    let finalTypeList = array.pop()
    let songs = []
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        all() {
            console.log(this.name)
        }

    }
    for (let i = 0; i < songsNumber; i++) {
        let [typeList, name, time] = array[i].split("_")
        let song = new Song(typeList, name, time)
        songs.push(song)
    }

    for (let i = 0; i< songsNumber;i++){
        let currentSong = songs[i]
        let currentTypeList = currentSong.typeList

        debugger
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])