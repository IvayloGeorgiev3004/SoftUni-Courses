function gramophone(bandName, albumName, songName) {

    let songDuration = ((bandName.length * albumName.length) * (songName.length)) / 2
    let result = Math.ceil(songDuration / 2.5)
    console.log(`The plate was rotated ${result} times.`)
}
gramophone('Rammstein', 'Sehnsucht',

    'Engel')