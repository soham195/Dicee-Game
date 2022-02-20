var listOfItems = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var randomNumber1 = Math.round(Math.random()*5+1)
var randomNumber2 = Math.round(Math.random()*5+1)

var dice1RandomImages = listOfItems[randomNumber1 - 1]
var dice2RandomImages = listOfItems[randomNumber2 - 1]

function winner() {
  document.querySelector(".img1").setAttribute("src", dice1RandomImages)
  document.querySelector(".img2").setAttribute("src", dice2RandomImages)

  let selecth1 = document.querySelector("h1")

  if (randomNumber1 > randomNumber2) {
    let textChange = selecth1.innerHTML = "Player One Wins!"
    textChange.style.whiteSpace = "nowrap"
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player Two Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw, Roll again!";
  }
}
winner()
