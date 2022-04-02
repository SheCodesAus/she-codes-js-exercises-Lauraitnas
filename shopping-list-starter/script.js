
let shoppingItems = ["milk", "eggs", "bread"]

function updateItems() {
    const listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingItems.forEach((item) => {
        const itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

updateItems();

function addItem() {
    const item = document.getElementById("new-item-text");
    shoppingItems.push(item.value);
    updateItems();
    item.value = "";
}

function clearItems() {
    shoppingItems = [];
    updateItems();
}





