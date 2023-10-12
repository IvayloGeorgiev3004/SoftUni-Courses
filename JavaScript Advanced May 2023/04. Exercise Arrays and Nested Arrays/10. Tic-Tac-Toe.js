function ticTacToe(movesArr) {
    let sign = "X"
    let isOver = false;
    let board = [['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false']]

    let index = 0;

    while (index < movesArr.length) {
        let move = movesArr[index]
        let MoveRow = Number(move.split(" ")[0])
        let MoveColumn = Number(move.split(" ")[1])


        if (board[MoveRow][MoveColumn] !== 'false') {
            console.log('This place is already taken. Please choose another!')
            index++
            continue;
        }

        board[MoveRow][MoveColumn] = sign;


        if ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) && board[0][0] !== 'false') { // check main diagonal
            isOver = true;
        } else if ((board[0][2] === board[1][1] && board[0][2] === board[2][0]) && board[0][2] !== 'false') { // check second diagonal
            isOver = true;
        } else if ((board[0][0] === board[0][1] && board[0][0] === board[0][2]) && board[0][0] !== 'false') { // check first row
            isOver = true;
        } else if ((board[1][0] === board[1][1] && board[1][0] === board[1][2]) && board[1][0] !== 'false') { // check second row
            isOver = true;
        } else if ((board[2][0] === board[2][1] && board[2][0] === board[2][2]) && board[2][0] !== 'false') { // check third row
            isOver = true;
        } else if ((board[0][0] === board[1][0] && board[0][0] === board[2][0]) && board[0][0] !== 'false') { // check first column
            isOver = true;
        } else if ((board[0][1] === board[1][1] && board[0][1] === board[2][1]) && board[0][1] !== 'false') { // check second column
            isOver = true;
        } else if ((board[0][2] === board[1][2] && board[0][2] === board[2][2]) && board[0][2] !== 'false') { // check second column
            isOver = true;
        }

        if (isOver) {
            break;
        }

        if (board[0].indexOf('false') === -1 && board[1].indexOf('false') === -1 && board[2].indexOf('false') === -1) {
            break;
        }

        if (sign === "X") {
            sign = "O";
        } else {
            sign = "X";
        }

        index++

    }

    if (isOver) {
        console.log(`Player ${sign} wins!`)
    } else {
        console.log(`The game ended! Nobody wins :(`)
    }

    for (let i = 0; i < board.length; i++) {
        let finalBoardString = ""
        for (let j = 0; j < board.length; j++) {
            finalBoardString += board[i][j] + "\t"
        }
        console.log(finalBoardString)
    }
}
ticTacToe(["0 0",
    "0 0",
    "0 0",
    "0 2",
    "2 0",
    "0 0",
    "1 0",
    "0 0",
    "1 2",
    "1 1",
    "0 0",
    "0 0",
    "0 0",
    "2 1",
    "2 2",
    "0 0"])