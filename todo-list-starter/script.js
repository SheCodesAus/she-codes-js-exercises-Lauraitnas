let todoTaskText = [];
let todoTaskStatus = [false, true];
let todoTaskDate = [];



function addTask() {
    let newTask = document.getElementById("new-task-text");
    if(newTask.value) {
        todoTaskText.push(newTask.value);
        todoTaskStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }

    let newTaskDate = document.getElementById("due-date");
    if (newTaskDate.value) {
        todoTaskDate.push(newTaskDate.value);
        todoTaskStatus.push(false);
        newTaskDate.value = "";
        updateTodoList();
    }
}

function updateTodoList() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; 
    todoTaskText.forEach((task, index, date) => {
        let newTodoTaskElement = createNewTodoItemElement(task, index, date);
        todoList.appendChild(newTodoTaskElement);
    });
}

function createNewTodoItemElement(task, index, date) {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if (todoTaskStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    let newTodoTaskDateElement = document.createElement("p");
    newTodoTaskDateElement.innerText = date;

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed";
    completeButtonElement.onclick = function(){
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

    return newTodoTaskElement;
}

function toggleComplete(index) {
    // if the to do is not complete
    if (todoTaskStatus[index] == false) {
        // set the todo to complete
        todoTaskStatus[index] = true;
        //else the todo is already complete so set it to incomplete
    }else{
        todoTaskStatus[index] = false;
    }
    updateTodoList();
}


updateTodoList();