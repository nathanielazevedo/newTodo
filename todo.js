let todoval = document.querySelector('#todotext');

let todobtn = document.querySelector('#todobutton');

let appendtodos = document.querySelector('#appendTodos');

let todoList = [];

if(JSON.parse(localStorage.getItem('todos')) == null){
    todoList = [];}

else{
    todoList = JSON.parse(localStorage.getItem('todos'));
}

todobtn.addEventListener('click', function(e){
    e.preventDefault();
    let newTodo = document.createElement('h3');
    newTodo.innerHTML = todoval.value;
    newTodo.classList.add('notcomplete');
    appendtodos.appendChild(newTodo);
    todoList.push({value: todoval.value, status: 'notcomplete'});
    localStorage.setItem('todos', JSON.stringify(todoList));
    todoval.value = '';

    let removebtn = document.createElement('button');
    removebtn.innerHTML = 'Remove';
    removebtn.classList.add('removebtn')
    newTodo.appendChild(removebtn);
})

let listen = document.querySelector('div');


listen.addEventListener('click', function(e){
    if(e.target.tagName == 'BUTTON'){
        e.target.parentElement.remove();
        for(let i=0; i<todoList.length; i++){
            if(e.target.parentElement.innerText.includes(todoList[i].value)){
                todoList.splice(i,1);
                localStorage.setItem('todos', JSON.stringify(todoList));
            }
        }
    };

    if(e.target.tagName == 'H3'){
        e.target.classList.toggle('complete');
        e.target.classList.toggle('notcomplete');
        for(let i=0; i<todoList.length; i++){
            if(e.target.innerText.includes(todoList[i].value)){
                console.log(e.target.classList.value)
                todoList[i].status = e.target.classList.value;
                localStorage.setItem('todos', JSON.stringify(todoList));
            }
        }
    }
})

for(let each of todoList){
    console.log(each.value);
    let newTodo = document.createElement('h3');
    newTodo.classList.add(each.status);
    newTodo.innerHTML = each.value;
    appendtodos.appendChild(newTodo);

    let removebtn = document.createElement('button');
    removebtn.innerHTML = 'Remove';
    removebtn.classList.add('removebtn')
    newTodo.appendChild(removebtn);
}