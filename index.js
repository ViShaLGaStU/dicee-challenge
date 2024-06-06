function numOne() {
    var num = Math.ceil(Math.random() * 6);
    imgSource = "./images/dice"+num+".png"
    document.querySelector(".img1").setAttribute("src" , imgSource);
    return num;
}

function numTwo() {
    var num = Math.ceil(Math.random() * 6);
    imgSource = "./images/dice"+num+".png"
    document.querySelector(".img2").setAttribute("src" , imgSource);
    return num;
}

var one = numOne()
var two = numTwo()

if (one > two) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (one === two) {
    document.querySelector("h1").innerHTML = "🚩 It is a Draw! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}