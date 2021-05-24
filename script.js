// console.log("Hello World")

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// function signOutMsg() {
//     alert("Are you super duper sure you want to leave?")
// }

// function chargeCard(){
//     // Get Element from HTML
//     var myElem = document.querySelector(".payMan")
//     // Console.log element
//     console.log(myElem);
//     myElem.style.display = "none";
// }

function edit(str) {
    let newName = prompt("What's your name?")
    if (newName != ""){
        document.querySelector(str).innerText = newName
    }
}

function disapp(str) {
    document.querySelector(str).remove()
}

function increasing(){
    let incVal = parseInt(document.querySelector("#inc").innerText)
    console.log(incVal)
    document.querySelector("#inc").innerText = incVal + 1
}

function decreasing(){
    let decVal = parseInt(document.querySelector("#dec").innerText)
    document.querySelector("#dec").innerText = decVal - 1
}