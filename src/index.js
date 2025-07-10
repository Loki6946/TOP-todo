import "./style.css"
import sidebar from "./components/Sidebar/Sidebar";
import todos from "./components/Todos/Todos";
const root = document.querySelector("#root");

function init(container) {
  container.appendChild(sidebar());
  container.appendChild(todos());
}

init(root)