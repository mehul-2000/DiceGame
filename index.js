var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var randomNumber2 = 1 + Math.floor(Math.random() * 6);


document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png")
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png")

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw !"
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩"
}
else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins"
}
