function buttonBuilder({type = "button", textContent, className, onClick}) {
  const button = document.createElement("button");

  button.type = type;
  if (textContent) button.textContent = textContent;
  if (className) button.className = className;
  if (onClick) button.addEventListener("click", onClick);

  return button
}

export default buttonBuilder