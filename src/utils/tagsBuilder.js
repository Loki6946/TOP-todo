function tagsBuilder(tag, className, textContent = null) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  element.classList.add(className);
  return element
}

export default tagsBuilder;