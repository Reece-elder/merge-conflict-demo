favFood = [

    "Food",
    "Food",
    "MoreFood",
    "yaki udon",
    "baked beans on toast",
    "cheese cake",
    "cantonese chicken",
    "cheese cake",
    "Ramen",
    "pepperoni pizza",
    "fries",
    "pasta",
    "margherita pizza"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

setTimeout(function(){
    window.location.reload(1);
 }, 5000);

