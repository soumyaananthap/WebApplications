var todos = ["dance with the peacock"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		listTodos();
		// console.log("***********");
		// todos.forEach(function(todo, i){
		// 	console.log(i + ": "+ todos);
		// });
		// console.log("***********");

	} else if(input === "new"){
		addTodo();
		// var newTodo = prompt("Enter new Todo");
		// todos.push(newTodo);
		// console.log("Added todo");
	} else if(input === "delete"){
		deleteTodo();
		//ask for an index of todo to be deleted 
		// var index = prompt("Enter index of todo to delete");
		// todos.splice(index,1);
	}

	input = prompt("What would you like to do?"); 
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
	console.log("***********");
	//i refers to the index of every item passed in
	todos.forEach(function(todo, i){
		console.log(i + ": "+ todos);
	});
		console.log("***********");
}

function addTodo(){
	var newTodo = prompt("Enter new Todo");
	todos.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	//ask for an index of todo to be deleted 
	var index = prompt("Enter index of todo to delete");
	// 1 refers to how many items to be deleted after index
	todos.splice(index,1);
}
