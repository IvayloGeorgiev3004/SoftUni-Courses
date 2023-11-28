function editElement(HTMLReference, string, replacer) {
    let text = HTMLReference.textContent
    let replacedText = text.split(string).join(replacer)
    HTMLReference.textContent = replacedText;
}

