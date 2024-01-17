const inputField = document.getElementById("squareSide")

console.log(squareSide)

var squareSide = " "

function btnClick(e) {
    if (e== 1) {
        if (e == "reset") {
            squareSide=" "
        } else {
            squareSide = squareSide + e
            console.log(squareSide)
        }
    }
}

