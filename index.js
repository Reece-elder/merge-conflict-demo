favFood = [

    "kebab",
    "lamb preferably",

    "pepperoni pizza",
    "yaki udon",
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

