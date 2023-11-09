function rectangle(width, height, color) {
  let changedColor = color.slice(0, 1).toUpperCase() + color.slice(1);
  debugger;
  return {
    width,
    height,
    color: changedColor,

    calcArea() {
      return this.width * this.height;
    },
  };
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
