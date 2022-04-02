// console.log("Hello, world!");

// function showName() {
//     // console.log("Laura santi");
//     let username = document.getElementById("name-text").value;
//     console.log(username);
// }

// for (let count = 0; count < 10; count++) {
//     console.log(count);
// }

let pets = ["Chilli", "Rex", "Roary", "Fleur"];
console.log(pets);
//push is for add item at the end of the array
pets.push("Ivy");
console.log(pets[0]);
console.log(pets.length);
console.log(pets[10]);


for (let index = 0; index < pets.length; index++){
    console.log(pets[index])
}

//function that works as a loop
pets.forEach((pet) => {
    console.log(pet);
});




let pet = "Ivy"

if (pet == "Chilli") {
    console.log("OMG you are the cuttest!");
}else if (pet == "Ivy") {
    console.log("it's alright")
}else  {
    console.log("OMG cutie");
}