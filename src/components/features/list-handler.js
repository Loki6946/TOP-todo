import buttonBuilder from "../../utils/button-builder";
import inputBuilder from "../../utils/input-builder";
import tagsBuilder from "../../utils/tags-builder";
import iconBuilder from "../../utils/icon-builder";

const listArray = []

class List {
  constructor(title) {
    this.title = title; 
    this.todo = {};
  }
}

const today = new List("Today");
listArray.push(today);

export function displayList(container) {
  container.textContent = "";
  for (let i = 0; i < listArray.length; i++) {
    const listContainer = tagsBuilder("div", {className: "sidebar__list-container"});
    const list = tagsBuilder("p", {textContent: listArray[i].title, className: "sidebar__list-text"});
    const listButton = buttonBuilder({className: "sidebar__list-button"});
    const listButtonIcon = iconBuilder("more_vert");
    
    listButton.append(listButtonIcon);
    listContainer.append(list, listButton);
    
    container.append(listContainer);
  }
}

export function addList(container) {
  const domInput = container.querySelector("#new-list-input");
  
  if (domInput) return
  
  const inputContainer = tagsBuilder("div", {className: "sidebar__input-container"});
  const input = inputBuilder("text", {className: "sidebar__input", id: "new-list-input"});
  const closeInputBtn = buttonBuilder({className: "sidebar__input-button"});
  const closeInputIcon = iconBuilder("close");

  closeInputBtn.append(closeInputIcon);
  inputContainer.append(input, closeInputBtn);
  container.append(inputContainer);
  input.value = "New List";
  input.focus();
  input.select();

  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      const newList = new List(input.value ? input.value : "New List");
      listArray.push(newList);
      displayList(container);
    }
  })

  closeInputBtn.addEventListener("click", () => inputContainer.remove())
}