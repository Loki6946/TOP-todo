import "./style.css"
import Sidebar from "./components/layout/Sidebar/Sidebar.js";
import Main from "./components/layout/Main/Main.js";
const root = document.querySelector("#root");

function init(container) {
  container.appendChild(Sidebar());
  container.appendChild(Main());
}

init(root)