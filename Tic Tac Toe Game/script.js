let boxes = document.querySelectorAll(".box");
let Newgamebtn = document.querySelector(".Newgame")
let Resetgamebtn = document.querySelector(".Resetgame")
let congratsMsg = document.getElementById("congratsMsg");

const WinnerPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
let tern0 = true;
const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBtn = () => {
    for (let box of boxes) {
        box.innerHTML = "";
        box.disabled = false;
    }
}

const reSetgame = () => {
    tern0 = true;
    congratsMsg.style.display = "none";
    enableBtn();
}


boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (tern0) {
            box.innerHTML = "X";
            box.disabled = true;
            tern0 = false;
        } else {
            box.innerHTML = "O";
            box.disabled = true;
            tern0 = true;
        }
        CheckWinner();

    })
})
let Player;
const CheckWinner = () => {

    for (let pattern of WinnerPattern) {
        let posVal1 = boxes[pattern[0]].innerHTML;
        let posVal2 = boxes[pattern[1]].innerHTML;
        let posVal3 = boxes[pattern[2]].innerHTML;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {

                if (posVal1 == "X") {
                    Player = 1;
                } else {
                    Player = 2;
                }

                disableBtn();

                Resetgamebtn.style.display = "none";
                congratsMsg.innerHTML = `✨Congratulations Player No- ${Player}✨🎉🎊`
                congratsMsg.style.display = "block";
            }
        }
    }
}
Newgamebtn.addEventListener('click', reSetgame);
Resetgamebtn.addEventListener('click', reSetgame);



