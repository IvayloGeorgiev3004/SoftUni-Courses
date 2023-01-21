function chessBoard(size) {
    console.log(`<div class="chessboard">`)
    for (let i = 1; i <= size; i++) {
        console.log(`  <div>`)
        for (let j = 1; j <= size; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    console.log(`\t<span class="black"></span>`)
                } else {
                    console.log(`\t<span class="white"></span>`)
                }
            } else if (i % 2 !== 0) {
                if (j % 2 === 0) {
                    console.log(`\t<span class="white"></span>`)
                } else {
                    console.log(`\t<span class="black"></span>`)
                }
            }
        }

        console.log(`\t</div>`)
    }
    console.log(`</div>`)

}
chessBoard(3)

/* function chessBoard2(size) {
    let buffer = ""
    console.log(`<div class="chessboard">`)
    for (let i = 1; i <= size; i++) {
        buffer+= "<div>\n"
        for (let j = 1; j <= size; j++) {
            buffer+= "\t<span><\\span>\n"
        }
        console.log(buffer)
       
    }
    console.log(`</div>`)

}
chessBoard2(3) */