
//Player1 diceroll

var player1 = Math.floor((Math.random()*6) + 1);

var diceimage1 = "dice" + player1 + ".png";

var source1 = "images/" + diceimage1;

document.querySelectorAll("img")[0].setAttribute("src", source1);

//Player2 diceroll

var player2 = Math.floor((Math.random()*6) + 1);

var diceimage2 = "dice" + player2 + ".png";

var source2 = "images/" + diceimage2;

document.querySelectorAll("img")[1].setAttribute("src", source2);

//winner declaration

if(player1 > player2){
  document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else if(player2 > player1){
  document.querySelector("h1").innerHTML = "Player 2 Win!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
