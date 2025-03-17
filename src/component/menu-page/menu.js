import arrowDown from "/src/assets/icons/arrow-down.svg"

function createFood(image, name, description, price) {
  const menuFood = document.createElement("div");
  menuFood.classList.add("menu__food");
  const menuFoodImage = document.createElement("img");
  menuFoodImage.classList.add("menu__food-image");
  menuFoodImage.setAttribute("src", image);
  const menuFoodTextContainer = document.createElement("div");
  menuFoodTextContainer.classList.add("menu__food-text-container");
  const menuFoodName = document.createElement("h3");
  menuFoodName.classList.add("menu__food-name");
  menuFoodName.textContent = name;
  const menuFoodDescription = document.createElement("p");
  menuFoodDescription.classList.add("menu__food-description");
  menuFoodDescription.textContent = description;
  const menuFoodPrice = document.createElement("p");
  menuFoodPrice.classList.add("menu__food-price");
  menuFoodPrice.textContent = price;

  menuFoodTextContainer.appendChild(menuFoodName);
  menuFoodTextContainer.appendChild(menuFoodDescription);

  menuFood.appendChild(menuFoodImage);
  menuFood.appendChild(menuFoodTextContainer);
  menuFood.appendChild(menuFoodPrice);
  
  return menuFood
}

function init(container) {
  const menuHeadingContainer = document.createElement("div");
  menuHeadingContainer.classList.add("menu__heading-container");
  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "MENU"
  menuHeading.classList.add("menu__heading");
  const menuHeadingButtonIcon = document.createElement("img");
  menuHeadingButtonIcon.setAttribute("src", arrowDown);
  const menuHeadingButton = document.createElement("a");
  menuHeadingButton.setAttribute("href", "#food");
  menuHeadingButton.textContent = "The food";
  menuHeadingButton.appendChild(menuHeadingButtonIcon);
  menuHeadingButton.classList.add("menu__heading-button");
  menuHeadingContainer.appendChild(menuHeading);
  menuHeadingContainer.appendChild(menuHeadingButton);

  const menuFoodSection = document.createElement("div");
  menuFoodSection.classList.add("menu__food-section");
  menuFoodSection.id = "food";
  const menuFoodWrapper = document.createElement("div");
  menuFoodWrapper.classList.add("menu__food-wrapper");
  const menuFoodContainer1 = document.createElement("div");
  menuFoodContainer1.classList.add("menu__food-container");
  const menuFoodContainer2 = document.createElement("div");
  menuFoodContainer2.classList.add("menu__food-container");

  menuFoodContainer1.appendChild(createFood("https://i.pinimg.com/736x/76/93/b2/7693b24fe712e399cc6788b8a00410a3.jpg", "Complete burger", "A complete burger for extra pleasure.", "$12.99"));
  menuFoodContainer1.appendChild(createFood("https://i.pinimg.com/736x/b2/74/b5/b274b548b3fe2f1641851f1c22ef425d.jpg", "Cheese burger", "Simple cheese burger for someone minimalist.", "$5.00"));
  menuFoodContainer1.appendChild(createFood("https://i.pinimg.com/736x/1d/58/7f/1d587f884322f03ad49f90d430f05efe.jpg", "Chili cheese dogs", "Spicy hot dogs will make you on fire." , "$8.50"));

  menuFoodContainer2.appendChild(createFood("https://i.pinimg.com/736x/3a/2a/5d/3a2a5d83ff86ee12531ab68266eeeffc.jpg", "Beef tacos with salad", "The best tacos with rich flavor.", "$10.99"));
  menuFoodContainer2.appendChild(createFood("https://i.pinimg.com/736x/88/b0/9d/88b09d7b9d5827c43abbca0bd3f17db0.jpg", "Beef shawarma", "The best beef shawarma in town.", "$6.99"));
  menuFoodContainer2.appendChild(createFood("https://i.pinimg.com/236x/73/7e/d9/737ed93987aae98a76fc2e5f12fc0ecc.jpg", "French fries", "Crispy french fries with ketchup.", "$7.99"));

  menuFoodWrapper.appendChild(menuFoodContainer1);
  menuFoodWrapper.appendChild(menuFoodContainer2);
  menuFoodSection.appendChild(menuFoodWrapper);

  container.appendChild(menuHeadingContainer);
  container.appendChild(menuFoodSection);
}

export default init