import "./style.css"
import tagsCreator from "./helpers/tags-creator"
const root = document.querySelector("#root");

function init(container) {
  const sideBar = tagsCreator("div", "main__sidebar");
  const mainTodos = tagsCreator("div", "main__todos");

  container.appendChild(sideBar);
  container.appendChild(mainTodos);
}

init(root)