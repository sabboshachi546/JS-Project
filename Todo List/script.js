let inputEl = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

addBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    toDoList();
})
function toDoList(){
    let newTask = inputEl.value ;
    const liEl = document.createElement('li');
    liEl.innerText = newTask;
    tasks.appendChild(liEl);
}
