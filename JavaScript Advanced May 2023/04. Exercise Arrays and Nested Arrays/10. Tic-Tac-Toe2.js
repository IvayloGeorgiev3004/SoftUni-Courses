function ticTacToe(arrayOfStrings) {
  function print(matrix) {
    matrix.forEach((element) => {
      console.log(element.join("\t"));
    });
  }

  let winner = undefined; // Will add winner here(if any)

  let board = new Array(3).fill().map(() => new Array(3).fill("false"));
  let numberedArr = arrayOfStrings.map((element) => (element = element.split(" ").map(Number)));
  let currentPlayer = "X";
  for (let move of numberedArr) {
    let row = move[0];
    let column = move[1];

    if (board.indexOf("false") === 0 ){
        break;
    }

    if (board[row][column] === "false") {
      board[row][column] = currentPlayer;
    } else {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    // CHECK ROWS
    if (board[0][0] !== "false" && board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
      winner = currentPlayer;
      break;
    } else if (board[1][0] !== "false" && board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
      winner = currentPlayer;
      break;
    } else if (board[2][0] !== "false" && board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
      winner = currentPlayer;
      break;
    }

    // CHECK COLUMNS

    if (board[0][0] !== "false" && board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
      winner = currentPlayer;
      break;
    } else if (board[0][1] !== "false" && board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
      winner = currentPlayer;
      break;
    } else if (board[0][2] !== "false" && board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
      winner = currentPlayer;
      break;
    }

    // CHECK DIAGONALS
    if (board[0][0] !== "false" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      winner = currentPlayer;
      break;
    } else if (board[0][2] !== "false" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      winner = currentPlayer;
      break;
    }

    if (currentPlayer === "X") {
      currentPlayer = "0";
    } else {
      currentPlayer = "X";
    }
  }

  winner ? console.log(`Player ${winner} wins!`) : console.log(`The game ended! Nobody wins :(`);
  print(board);
}
ticTacToe(["0 1", 
"0 0", 
"0 2", 
"2 0", 
"1 0", 
"1 2", 
"1 1", 
"2 1", 
"2 2", 
"0 0"]);
