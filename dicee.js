var randomNumber1 = Math.floor(Math.random()*6);

var dice = ["dice1","dice2","dice3","dice4","dice5","dice6"];

var randomdice1 = dice[randomNumber1];

document.querySelectorAll("img")[0].setAttribute("src","images/"+ randomdice1 + ".png");

var randomNumber2 = Math.floor(Math.random()*6);

var randomdice2 = dice[randomNumber2];

document.querySelectorAll("img")[1].setAttribute("src","images/"+ randomdice2 + ".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "✌️It's a Draw";
}