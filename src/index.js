import "./style.css"
import sidebar from "./components/layout/Sidebar";
import todos from "./components/layout/Main/";
const root = document.querySelector("#root");

function init(container) {
  container.appendChild(sidebar());
  container.appendChild(todos());
}

init(root)