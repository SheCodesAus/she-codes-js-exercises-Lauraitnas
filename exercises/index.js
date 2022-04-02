function add(step){
    let numberElement = document.getElementById("number").value;
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;

    console.log(number)
}