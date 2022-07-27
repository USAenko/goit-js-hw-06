const numberOfCategories = categories.children.length;
console.log("Number of Categories:", numberOfCategories)

const list = categories.children;
// console.log(list)
for (let li of list) {
    const itemTitle = li.querySelector(".item h2").textContent;
    console.log("Category:", itemTitle);
    const itemListCounter = li.querySelector(".item ul").children.length;
    console.log("Elements:", itemListCounter);
}

// let itemTitle = categories.querySelectorAll(".item h2")[0].textContent;
// console.log("Category:", itemTitle);
// let itemListCounter = categories.querySelectorAll(".item ul")[0].childElementCount
// console.log(
//   "Elements:", itemListCounter);

// itemTitle = categories.querySelectorAll(".item h2")[1].textContent;
// console.log("Category:", itemTitle);
// itemListCounter = categories.querySelectorAll(".item ul")[1].childElementCount
// console.log(
//   "Elements:", itemListCounter);

// itemTitle = categories.querySelectorAll(".item h2")[2].textContent;
// console.log("Category:", itemTitle);
// itemListCounter = categories.querySelectorAll(".item ul")[2].childElementCount
// console.log(
//   "Elements:", itemListCounter);