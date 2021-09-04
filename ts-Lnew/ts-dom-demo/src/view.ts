
// import todoModel from './model'
const list = document.getElementById('todo') as HTMLUListElement | null;
const addButton = document.querySelector<HTMLButtonElement>('#add');
addButton?.addEventListener('click', add);
function remove(this: HTMLButtonElement, id: number) {
  const todo = this.parentElement;
  todo && list?.removeChild(todo) && todoModel.remove(id);
}
function add() {
  const id = todoModel.add();
  const todoEle = document.createElement('li');
  todoEle.innerHTML = `待办 ${id} <button>删除</button>`;
  const button = todoEle.getElementsByTagName('button')[0];
  button.style.color = 'red';
  if (button) {
    button.onclick = remove.bind(button, id);
  }
  list?.appendChild(todoEle);
}
