function tagsBuilder(tag, className, textContent = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.textContent = textContent;
  return element
}

export default tagsBuilder;