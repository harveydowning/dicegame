function randomdice1(){
    
    var randomnumber = Math.random();
    randnum = Math.floor(randomnumber * 6) + 1;
    console.log(randnum);

    if (randnum === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    } 
    
    else if (randnum === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    }

    else if (randnum === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    }
    
    else if (randnum === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    }

    else if (randnum === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    }

    else if (randnum === 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    }

    console.log(randnum)
};

function randomdice2(){
    
    var randomnumber = Math.random();
    randnum2 = Math.floor(randomnumber * 6) + 1;
    console.log(randnum2);

    if (randnum2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    } 
    
    else if (randnum2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    }

    else if (randnum2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    }
    
    else if (randnum2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    }

    else if (randnum2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    }

    else if (randnum2 === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    }

    console.log(randnum2)
};

function winnercalc(){
    if (randnum > randnum2) {
        document.querySelector("h1").innerText = "Player 1 wins!"
    } else if (randnum2 > randnum) {
        document.querySelector("h1").innerText = "Player 2 wins!"
    } else {
        document.querySelector("h1").innerText = "Draw!"
    }
}

var randnum = ""
var randnum2 = ""
randomdice1(randnum);
randomdice2(randnum2);
winnercalc();


