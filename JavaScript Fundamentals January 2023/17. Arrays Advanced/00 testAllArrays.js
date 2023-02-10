function test(array) {
   array.splice(-1,2, `addThis`)
   // ['cat', 2, '2', 'cat', 'dog', 'addThis'] - маха 2 елемента на дясно 
   // от последния елемент в масива и добавя нов стринг
    array.splice(-2,3, "addThis") //маха 3 елемента на дясно от елемента,
    // който се намира на -2 позиция и добавя новия стринг
   console.log(array)
}
test([`cat`, 2, `2`, `cat`, `dog`, 34])