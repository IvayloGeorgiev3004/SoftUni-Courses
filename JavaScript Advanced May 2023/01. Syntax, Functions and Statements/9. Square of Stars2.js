function squareOfStars2(input) {
  if (!input) {
    for (let i = 0; i < 5; i++) {
      console.log("* * * * *");
    }
  } else {
    for (let i = 0; i < input; i++) {
      console.log("* ".repeat(input));
    }
  }
}
squareOfStars2(7);
