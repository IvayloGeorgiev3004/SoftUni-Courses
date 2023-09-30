function stringLength(string, string1, string2) {
    let stringsLength = string.length + string1.length + string2.length;
    let average = Math.floor(stringsLength / 3);

    console.log(stringsLength);
    console.log(average)

}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')