function editElement(reference, match, replacer) {
  let text = reference.textContent;
  let regex = new RegExp(match, "g");
  text = text.replace(regex, replacer);
  reference.textContent = text;
}
