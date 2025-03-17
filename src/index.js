import "./style.css"
import burgerSvg from "./assets/images/burger.svg"
import arrowRight from "./assets/icons/arrow-right.svg"
import menu from "./component/menu-page/menu"
import about from "./component/about-page/about"

const contentContainer = document.querySelector("#content")
const linkButton = document.querySelectorAll("#link-button")

function changePage(link) {
  switch (link) {
    case "home":
      contentContainer.innerHTML = ""
      init(contentContainer)
      break
    case "menu":
      contentContainer.innerHTML = ""
      menu(contentContainer)
      break
    case "about":
      contentContainer.innerHTML = ""
      about(contentContainer)
      break
  }
}

linkButton.forEach((button) => {
  button.addEventListener("click", () => {
    changePage(button.dataset.link)
  })
})

function init(container) {
  const heroContainer = document.createElement("div")
  heroContainer.classList.add("main__hero-container")
  const heroText = document.createElement("p")
  heroText.classList.add("main__hero-text")
  heroText.textContent = "RESTAURANT"
  const heroImage = document.createElement("img")
  heroImage.setAttribute("src", burgerSvg)
  heroImage.classList.add("main__hero-image")
  const heroButtonIcon = document.createElement("img")
  heroButtonIcon.setAttribute("src", arrowRight)
  heroButtonIcon.classList.add("main__hero-button-icon")
  const heroButton = document.createElement("button")
  heroButton.classList.add("main__hero-button")
  heroButton.dataset.link = "menu"
  heroButton.textContent = "Check the menu"
  heroButton.appendChild(heroButtonIcon)

  heroButton.addEventListener("click", () => changePage(heroButton.dataset.link))

  heroContainer.appendChild(heroImage)
  heroContainer.appendChild(heroText)
  heroContainer.appendChild(heroButton)

  container.appendChild(heroContainer)
}

init(contentContainer)