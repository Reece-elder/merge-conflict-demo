favFood = [
    "pepperoni pizza",
    "yaki udon",
    "burgers"
    "Steak & Chips",
    "Chicken Fajitas",
    "yaki udon",
    "tonkatsu ramen",
    "soup",
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

