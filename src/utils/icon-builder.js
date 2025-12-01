function iconBuilder(iconName) {
  const span = document.createElement("span");
  
  span.className = "material-icons";
  span.textContent = iconName;

  return span;
}

export default iconBuilder;