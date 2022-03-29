// window.onload = function load() {
//     console.log("page has loaded");
// }

window.onload = function load() {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");

    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    
    speechBubbleElement.appendChild(messageBox)

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
}

// window.onload is for access the window of the browser and running the function when the window load


function showMessage() {
    let message = document.getElementById("message-text").value;
    let message2 = document.getElementById("message-name").value;

    let messageBox = document.getElementById("message-box");

    messageBox.innerText = message + " - " + message2;

}


