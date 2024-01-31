var game_box = Array.from(document.getElementsByClassName("game-box"));
var winnertemp = Array.from(document.getElementsByTagName("output"))[0];
var color1 = "rgb(251, 254, 255)"// default bg color
var color2 = "rgb(213, 221, 255)" // selected box color
var color3 = "rgb(76 0 255 / 39%)" //selected value
var isselected = false;
var iswinner = false
var boxnumber = -1;
var s = -1
// console.log(isprevalue)

document.addEventListener("DOMContentLoaded", function () {


    let p = 0;

    function game() {
        s=changegame(s)
        // console.log(s)
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (prevalue[s][i][j] == "") {
                    continue;
                }
                if (isprevalue[s][i][j] == true) {
                    game_box[i * 9 + j].style.color = "rgb(0 3 144)";
                }
                game_box[i * 9 + j].innerHTML = prevalue[s][i][j];
            }
        }
    }
    function clean() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                game_box[i * 9 + j].innerHTML = "";
            }
        }
    }
    // game()
    function startNewGame() {
        clean(); // Clean the game board
        // console.log("calling game")
        game(); // Start the game
    }
    const newGameButton = document.getElementById("newGameButton");
    newGameButton.addEventListener("click", startNewGame);

    function changegame(s) {
        return (s+1)%4
    }
    
    
});
function lightsup(x, y) {
    // console.log(x, y, typeof x)
    isselected = true
    boxnumber = x * 9 + y;
    let boxvalue = game_box[x * 9 + y].innerHTML;
    for (let i = 0; i < 81; i++) {
        if (x == parseInt(i / 9) || y == i % 9) {
            game_box[i].style.backgroundColor = color2;
        }
        else {
            game_box[i].style.backgroundColor = color1;
        }
        if (game_box[i].innerHTML == boxvalue && game_box[i].innerHTML !== "") {
            game_box[i].style.backgroundColor = color3;
        }


    }


}
//fill numebr in boxes
function fill_number(n) {
    if (isselected == true) {
        if (isprevalue[s][parseInt(boxnumber / 9)][boxnumber % 9] == false) {
            game_box[boxnumber].innerHTML = n;
            // console.log("this one executed", isloose(parseInt(boxnumber / 9), boxnumber % 9))
            if (isloose(parseInt(boxnumber / 9), boxnumber % 9) === true) {
                winnertemp.innerHTML = "<h3>invalid number</h3>"
                winnertemp.style.color = "red"
                setTimeout(function () {
                    winnertemp.innerHTML = "<h3>Start Playing...</h3>";
                    winnertemp.style.color = "black";
                }, 2000);

            }
            else {
                check_win()
                if (iswinner == true) {
                    winnertemp.innerHTML = "<h3>You Win</h3>"
                    winnertemp.style.color = "green"
                }
            }

        }
    }
    else {
        alert("koi box select toh kar lawde")
    }
}

function isloose(r, c) {

    // checking row
    let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 9; i++) {
        // console.log(i,c)
        if (game_box[9 * i + c].innerHTM == "") {
            continue;
        }
        temp[parseInt(game_box[9 * i + c].innerHTML)] += 1
    }
    // console.log("row", temp,Math.max(...temp))
    if (Math.max(...temp) > 1) {
        return true;
    }



    // checking column
    let temp2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++) {
        if (game_box[r * 9 + i].innerHTM == "") {
            continue;
        }
        temp2[parseInt(game_box[r * 9 + i].innerHTML)] += 1;
    }
    // console.log("column", temp2,Math.max(...temp2))
    if (Math.max(...temp2) > 1) {
        return true;
    }



    //checing a box 3*3
    let r1 = parseInt(r / 3) * 3;
    let c1 = parseInt(c / 3) * 3;
    let temp3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            temp3[game_box[(r1 + i) * 9 + j].innerHTML] += 1
            // console.log(i * 9 + j)
        }
    }
    // console.log("3*3 box", temp3, Math.max(...temp3))

    if (Math.max(...temp3) > 1) {
        return true;
    }

    return false

}
function check_win() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (game_box[i * 9 + j].innerHTML == "") {
                iswinner = false
                return
            }
        }
    }
    iswinner = true;
}

