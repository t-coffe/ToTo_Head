let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let para = document.querySelector("#counter")
let reSet = document.querySelector("#reset")
let counter = 0

para.textContent = counter
para.style.color = "red"
para.style.fontWeight = "bold"

function reset() {
    counter = 0
    para.textContent = counter
    minus.disabled = false
    plus.disabled = false
    para.style.color = "red"
    para.style.backgroundColor = "white"
    para.style.fontWeight = "bold"
}

function decreasing() {
    counter --
    para.textContent = counter
    if (counter == -10) {
        minus.disabled = true
    }
    if (counter == 19) {
        plus.disabled = false
    }
    if (counter == 0) {
        para.style.color = "red"
    } else {
        para.style.color = "black"
    }
    if (counter % 2 == 0) {
        para.style.backgroundColor = "white"
        para.style.fontWeight = "bold"
    } else {
        para.style.backgroundColor = "green"
        para.style.fontWeight = "normal"
    }
}

function increasing() {
    counter ++
    para.textContent = counter    
    if (counter == 20) {
        plus.disabled = true
    }
    if (counter == -9) {
        minus.disabled = false
    }
    if (counter == 0) {
        para.style.color = "red"
    } else {
        para.style.color = "black"
    }
    if (counter % 2 == 0) {
        para.style.backgroundColor = "white"
        para.style.fontWeight = "bold"
    } else {
        para.style.backgroundColor = "green"
        para.style.fontWeight = "normal"
    }
}



reSet.addEventListener("click", reset)

minus.addEventListener("click", decreasing)

plus.addEventListener("click", increasing)