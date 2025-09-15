function buttonBuilder({type = "button", textContent, className, id, onClick}) {
  const button = document.createElement("button");

  button.type = type;
  if (textContent) button.textContent = textContent;
  if (className) button.className = className;
  if (id) button.id = id;
  if (onClick) button.addEventListener("click", onClick);

  return button
}

export default buttonBuilder