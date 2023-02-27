
var todo=document.getElementById("newTodoInput");
var list=document.getElementById("todoList");
var btn=document.getElementById("addTodoBtn");
//alert(btn)
function addTodo(){
	var todoVal=todo.value();
	
	alert("valu");

	if(todoVal){
		var li=document.createElement('li');
		li.textContent=todoVal;
		list.appendChild(li);
		todo.value="";
	}
}
btn.addEventListner('click',addTodo);


