function wordsToUpperCase(string) {
  let match = string.match(/\b\w+\b/g)
  let result = match.join(", ").toUpperCase();
  console.log(result);
}
wordsToUpperCase("Functions in JS can be nested, i.e. hold other functions");
