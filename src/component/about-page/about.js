function init(container) {
  const aboutSection = document.createElement("div")
  aboutSection.classList.add("about")
  const aboutContainer = document.createElement("div")
  aboutContainer.classList.add("about__container")
  const aboutHeading = document.createElement("h1")
  aboutHeading.classList.add("about__heading")
  aboutHeading.textContent = "ABOUT"
  const aboutDescription = document.createElement("p")
  aboutDescription.classList.add("about__description")
  aboutDescription.textContent = "Dom's Diner is a cozy, retro-inspired spot serving classic American comfort food. With hearty burgers, crispy fries, and rich milkshakes, it's perfect for a quick breakfast or a late-night bite. The vintage décor and friendly vibe make every visit feel like a step back in time."
  
  aboutContainer.appendChild(aboutHeading)
  aboutContainer.appendChild(aboutDescription)
  aboutSection.appendChild(aboutContainer)

  container.appendChild(aboutSection)
}

export default init
