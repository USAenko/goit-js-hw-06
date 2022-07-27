const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = [];

for (let ingredient of ingredients) {
  // console.log(ingredient);
  const createLi = document.createElement('li');
  createLi.classList.add("item");
  createLi.textContent = ingredient;  
  // element.append(createLi)
  list.push(createLi);
}

const workArea = document.querySelector("ul");
workArea.append(...list);
