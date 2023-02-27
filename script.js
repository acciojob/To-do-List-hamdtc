
var todo=document.getElementById('newTodoInput');
var list=document.getElementById('todoList');
var btn=document.getElementById('addTodoBtn');

function addTodo(){
	var todoVal=todo.value();

	if(todoVal){
		var li=document.createElement('li');
		list.appendChild(li);
		todo.value="";
	}
}
btn.addEventListner("click",addTodo);

