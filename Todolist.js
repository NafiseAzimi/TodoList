
let valueInput
let list
let span
let ul = document.getElementById("ul")
let input = document.getElementById("input");
let error = document.getElementById("error")
let icon
function newTodo() {
    list = document.createElement("li");
    span = document.createElement("span");
    span.setAttribute("class","span")
    icon = document.createElement("i");
    icon.className = "fa fa-trash","fa"
    ul.append(list);
    list.append(span, icon);
}

function submitTodo(valueInput) {
    newTodo()
    span.innerHTML = valueInput
    input.value = ""
    list.setAttribute("class", "li")
}
function removeTodo() {
    icon.addEventListener("click", function (event) {
     event.target.parentElement.remove()
    })
}
input.addEventListener("keydown", function (event) {
    let keycodes = event.keyCode
    if (input.value == "") {
        error.innerHTML = ""
    }
    else if (keycodes == 13) {
        error.innerHTML = ""
        valueInput = event.target.value;
        submitTodo(valueInput);
        removeTodo();

    }
})

