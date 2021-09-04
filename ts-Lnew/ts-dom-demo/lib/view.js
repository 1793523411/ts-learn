"use strict";
// import todoModel from './model'
var list = document.getElementById('todo');
var addButton = document.querySelector('#add');
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', add);
function remove(id) {
    var todo = this.parentElement;
    todo && (list === null || list === void 0 ? void 0 : list.removeChild(todo)) && todoModel.remove(id);
}
function add() {
    var id = todoModel.add();
    var todoEle = document.createElement('li');
    todoEle.innerHTML = "\u5F85\u529E " + id + " <button>\u5220\u9664</button>";
    var button = todoEle.getElementsByTagName('button')[0];
    button.style.color = 'red';
    if (button) {
        button.onclick = remove.bind(button, id);
    }
    list === null || list === void 0 ? void 0 : list.appendChild(todoEle);
}
