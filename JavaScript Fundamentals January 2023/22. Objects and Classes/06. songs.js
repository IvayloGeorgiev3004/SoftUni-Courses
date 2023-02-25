function songs(array) {
    let totalNumberOfSongs = Number(array.shift());
    let typeOfList = array.pop();
    let newSongsList = []

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time
        }
    }

    for (let arguments of array) {
        let [type, name, duration] = arguments.split("_")
        let song = new Song(type, name, duration)
        newSongsList.push(song)
    }
    for (let i = 0; i < totalNumberOfSongs; i++) {
        let currentSong = newSongsList[i]
        if (typeOfList === "all") {
            console.log(currentSong.name)
        } else if (currentSong.type === typeOfList) {
            console.log(currentSong.name)
        }
    }
debugger
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])