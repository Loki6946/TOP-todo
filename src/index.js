import "./style.css"
import tagsBuilder from "./utils/tagsBuilder"
const root = document.querySelector("#root");

function init(container) {
  const sidebar = tagsBuilder("div", "main__sidebar");
  const mainTodos = tagsBuilder("div", "main__todos");

  container.appendChild(sidebar);
  container.appendChild(mainTodos);
}

init(root)