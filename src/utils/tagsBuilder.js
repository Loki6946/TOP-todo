function tagsBuilder(tag, className, textContent = null) {
  const element = document.createElement(tag);
  className ? element.classList.add(className) : null;
  element.textContent = textContent;
  return element
}

export default tagsBuilder;