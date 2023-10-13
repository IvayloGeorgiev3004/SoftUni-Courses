function ticTacToe(movesArr) {
    // Инициализация на променливи
    let sign = "X"; // Инициализация на първия играч с "X"
    let isOver = false; // Флаг, показващ дали играта е приключила
    let board = [['false', 'false', 'false'], ['false', 'false', 'false'], ['false', 'false', 'false']]; // Инициализация на игралната дъска (матрица 3x3) със стойности 'false'

    let index = 0; // Инициализация на индекс за обхождане на входния масив с ходовете

    // Итериране през входния масив с ходовете
    while (index < movesArr.length) {
        let move = movesArr[index];
        let MoveRow = Number(move.split(" ")[0]); // Извличане на реда от текущия ход
        let MoveColumn = Number(move.split(" ")[1]); // Извличане на колоната от текущия ход

        // Проверка дали избраната позиция на дъската е свободна
        if (board[MoveRow][MoveColumn] !== 'false') {
            console.log('This place is already taken. Please choose another!'); // Извеждане на съобщение за грешка, ако позицията вече е заета
            index++; // Преминаване към следващия ход във входния масив
            continue; // Продължаване към следващата итерация от цикъла
        }

        board[MoveRow][MoveColumn] = sign; // Записване на текущия играч (символ 'X' или 'O') на избраната позиция

        // Проверка за победител в редовете, колоните и диагоналите на дъската
        // Ако някой от условията е изпълнено, играта приключва и се променя стойността на isOver на true
        if ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) && board[0][0] !== 'false') {
            isOver = true; // Проверка за главната диагонал
        } else if ((board[0][2] === board[1][1] && board[0][2] === board[2][0]) && board[0][2] !== 'false') {
            isOver = true; // Проверка за второстепенната диагонал
        } else if ((board[0][0] === board[0][1] && board[0][0] === board[0][2]) && board[0][0] !== 'false') {
            isOver = true; // Проверка за първия ред
        } else if ((board[1][0] === board[1][1] && board[1][0] === board[1][2]) && board[1][0] !== 'false') {
            isOver = true; // Проверка за втория ред
        } else if ((board[2][0] === board[2][1] && board[2][0] === board[2][2]) && board[2][0] !== 'false') {
            isOver = true; // Проверка за третия ред
        } else if ((board[0][0] === board[1][0] && board[0][0] === board[2][0]) && board[0][0] !== 'false') {
            isOver = true; // Проверка за първата колона
        } else if ((board[0][1] === board[1][1] && board[0][1] === board[2][1]) && board[0][1] !== 'false') {
            isOver = true; // Проверка за втората колона
        } else if ((board[0][2] === board[1][2] && board[0][2] === board[2][2]) && board[0][2] !== 'false') {
            isOver = true; // Проверка за третата колона
        }

        if (isOver) {
            break; // Ако има победител, играта приключва
        }

        // Проверка дали всички позиции на дъската са заети, и ако да, играта приключва без победител
        if (board[0].indexOf('false') === -1 && board[1].indexOf('false') === -1 && board[2].indexOf('false') === -1) {
            break; // Ако всички позиции са заети, играта приключва
        }

        // Смяна на играча след всеки ход
        if (sign === "X") {
            sign = "O";
        } else {
            sign = "X";
        }

        index++; // Преминаване към следващия ход във входния масив
    }

    // Извеждане на резултата на конзолата
    if (isOver) {
        console.log(`Player ${sign} wins!`); // Ако има победител, извежда се съобщение за победителя
    } else {
        console.log(`The game ended! Nobody wins :(`); // Ако няма победител, извежда се съобщение, че никой не печели
    }

    // Извеждане на крайния вид на дъската след играта
    for (let i = 0; i < board.length; i++) {
        let finalBoardString = ""; // Стринг, който ще съхранява текущия ред на дъската
        for (let j = 0; j < board.length; j++) {
            finalBoardString += board[i][j] + "\t"; // Добавяне на стойностите от текущия ред на дъската към finalBoardString с разделител табулация
        }
        console.log(finalBoardString); // Извеждане на текущия ред на дъската на конзолата
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