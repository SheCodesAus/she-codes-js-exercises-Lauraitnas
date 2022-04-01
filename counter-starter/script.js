function add(step) {
    // console.log("Look at me, I am adding stuff up");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;

    console.log(number);
}

function substract(step) {
    // console.log("Look at me, I am adding stuff up");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;

    console.log(number);
}

function moltiplication(step) {
    // console.log("Look at me, I am adding stuff up");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) * step;
    numberElement.innerText = number;

    console.log(number);
}

function division(step) {
    // console.log("Look at me, I am adding stuff up");
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) / step;
    numberElement.innerText = number;

    console.log(number);
}


// function myNumber(step) {
//     // console.log("Look at me, I am adding stuff up");
//     let numberElement = document.getElementById("number").value;
//     let number = numberElement.innerText;
//     number = parseInt(number) + step;
//     numberElement.innerText = number;

//     console.log(number);
// }

