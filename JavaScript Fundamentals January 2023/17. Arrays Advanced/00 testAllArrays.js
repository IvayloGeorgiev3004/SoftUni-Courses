function test(array) {
    console.log(array);
   let slicedArray = []
   slicedArray = array.slice(1)
   console.log(slicedArray)
   
   slicedArray = array.slice(2,3)
   console.log(slicedArray)

}
test([`one`, ` two`, 3, `five`])