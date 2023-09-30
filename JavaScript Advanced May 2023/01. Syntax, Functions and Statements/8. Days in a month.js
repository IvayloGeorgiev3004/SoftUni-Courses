// function getDaysInMonth(month, year) {
//     let days = 0;
//     switch (month) {
//         case 1: days = 31; break;
//         case 2: days = 28; break;
//         case 3: days = 31; break;
//         case 4: days = 30; break;
//         case 5: days = 31; break;
//         case 6: days = 30; break;
//         case 7: days = 31; break;
//         case 8: days = 31; break;
//         case 9: days = 30; break;
//         case 10: days = 31; break;
//         case 11: days = 30; break;
//         case 12: days = 31; break;
//     }

//     if (days === 28) {
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             days = 29;
//         }
//     }

//     console.log(days)
// }

// getDaysInMonth(2, 2021)

function getDaysInMonth(month, year) {
    let date = new Date(year, month, 0)
    console.log(date.getDate())
}
getDaysInMonth(6, 2021)

