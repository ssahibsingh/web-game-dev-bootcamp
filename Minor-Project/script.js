function randomNumber() {
    var num = Math.random();
    num = Math.floor(num * 6) + 1
    return num;
}

function tossthedice() {

    var player1 = randomNumber();
    var player2 = randomNumber();

    var playerImg1 = "images/" + "dice" + player1 + ".png";
    var playerImg2 = "images/" + "dice" + player2 + ".png";

    var playerName1 = prompt("Enter Player 1 Name: ");
    var playerName2 = prompt("Enter Player 2 Name: ");


    if (playerName1 != "" && playerName2 != "") {
        document.querySelector("#Player1 h3").innerText = playerName1;
        document.querySelector("#Player2 h3").innerText = playerName2;
    }

    document.querySelector("#Player1 img").setAttribute("src", playerImg1);
    document.querySelector("#Player2 img").setAttribute("src", playerImg2);

    if (player1 > player2) {
        document.querySelector("h1").innerText = "🏆 " + playerName1 + " Wins";
    }
    else if (player1 < player2) {
        document.querySelector("h1").innerText = playerName2 + " Wins 🏆";
    }
    else if (player1 == player2) {
        document.querySelector("h1").innerText = "Toss Again 🎲"
    }
}