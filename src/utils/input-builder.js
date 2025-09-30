function inputBuilder(type, {name, id, placeHolder, className} = {}) {
  const element = document.createElement("input");

  element.type = type;
  if (name) element.name = name;
  if (id) element.id = id;
  if (placeHolder) element.placeholder = placeHolder;
  if (className) element.className = className;

  return element;
}

export default inputBuilder