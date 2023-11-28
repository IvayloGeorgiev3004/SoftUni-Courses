function colorize() {
  // let selector = document.querySelectorAll("tr:not(:first-child)") псевдо селектор, взима всички без първия!
 // document.querySelectorAll("tr:not(:first-child):nth-child(odd)") взима всички нечетни без първия!


  let selector = document.querySelectorAll("tr + tr");
  for (let i = 0; i < selector.length; i++) {
    if (i % 2 === 0) {
      selector[i].style.background = "teal";
    }
  }
}
