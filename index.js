favFood = [
    "Lasagna",
    "Beef Pho",
    "cheesecake"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

