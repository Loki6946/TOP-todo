import "./Sidebar.css";
import tagsBuilder from "../../../utils/tags-builder";
import buttonBuilder from "../../../utils/button-builder";
import {displayList , addList} from "../../features/list-handler";

function sidebar() {
  const sidebar = tagsBuilder("aside", { className: "sidebar" });
  const nav = tagsBuilder("nav", { className: "sidebar__navigation" });
  displayList(nav);

  const buttonContainer = tagsBuilder("div", { className: "sidebar__button-container" });
  const newListButton = buttonBuilder({
    textContent: "+ New List",
    className: "sidebar__newlist-button",
    onClick: () => {
      addList(nav);
    }
  });
  buttonContainer.append(newListButton);

  sidebar.append(nav, buttonContainer);
  return sidebar;
}

export default sidebar;
