function tagsBuilder(tag, {textContent, className} = {}) {
  const element = document.createElement(tag);

  if (textContent !== undefined) element.textContent = textContent;
  if (className !== undefined) element.className = className;
  
  return element
}

export default tagsBuilder;