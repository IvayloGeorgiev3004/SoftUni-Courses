function editElement(reference, match, replacer) {
  let text = reference.textContent;
  let regex = new RegExp(match, "g");
  reference.textContent = text.replace(regex, replacer);
}
