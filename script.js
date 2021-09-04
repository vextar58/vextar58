let inputEl = document.getElementById("input")
let squareEl = document.getElementById("square") 

function test(params) {
    let n = Number(inputEl.value)
    if (!n) {
        alert("please enter a valid integer")
        inputEl.value=" "

    } else {
        let figure = square(n)
        squareEl.textContent=figure
        
    }
}

function square(n) {
    let row1 = "x".repeat(n) + "\n";
    let row2 = "x" + " ".repeat(n-2) + "x" + "\n";
    let result = row1;


    for (let j = 1; j <= n - 2; j++) {
        result += row2;

    }
    result += row1
    return result
}