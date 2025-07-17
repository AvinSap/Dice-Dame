//  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//  var randomDiceImage = "dice" + randomNumber1 + ".png";
//  var randomImageSource = "images/" + randomDiceImage;
//  var image1 = document.querySelectorAll("div img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("div img")[1].setAttribute("src", randomImageSource2);

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins";
// }else if(randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML ="Player 2 Wins";
// }else {
//     document.querySelector("h1").innerHTML = "It's a tie! ";
// }

var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("div img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("div img")[1];
image2.setAttribute("src", randomImageSource2);
h1= "Reload Game"
if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML ="Player 2 Wins";
    }else{
        document.querySelector("h1").innerHTML = "It's a tie! ";
    }
    