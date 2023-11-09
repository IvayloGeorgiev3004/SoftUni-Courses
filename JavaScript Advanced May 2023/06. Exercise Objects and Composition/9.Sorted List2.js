function createSortedList() {
  return {
    listOfElements: [],
    add(element) {
      this.listOfElements.push(element);
      this.listOfElements.sort((a, b) => a - b);
      return this.listOfElements;
    },
    remove(index) {
      if (index >= 0 && index < this.listOfElements.length) {
        this.listOfElements.splice(index, 1);
        return this.listOfElements;
      } else {
        return undefined;
      }
    },
    get(index) {
      if (index >= 0 && index < this.listOfElements.length) {
        return this.listOfElements[index];
      }
      return undefined;
    },
    get size() {
      return this.listOfElements.length;
    },
  };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(2);
list.add(9);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
