import "./style.css"
const root = document.querySelector("#root");

function init(container) {
  const helloWorld = document.createElement('h1');
  helloWorld.textContent = "Hello World";
  container.appendChild(helloWorld);
}

init(root)