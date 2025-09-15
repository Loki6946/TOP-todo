function tagsBuilder(tag, {textContent, className, id} = {}) {
  const element = document.createElement(tag);

  if (textContent) element.textContent = textContent;
  if (className) element.className = className;
  if (id) element.id = id;
  
  return element
}

export default tagsBuilder;