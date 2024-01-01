window.onload = function () {
    document.getElementById("inputfield").focus();
}
var string = "";
var btn = document.querySelectorAll(".button");
var arr = Array.from(btn);
Array.from(btn).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // console.log(e.target);
        if (e.target.innerHTML == "AC") {
            string = "";
            document.getElementById('inputfield').value = string;

        } else if (e.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById('inputfield').value = string;
        }
        else if (e.target.innerHTML == "DL") {
            string = string.substring(0, string.length - 1);
            document.getElementById('inputfield').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById('inputfield').value = string;
        }

    })
})
