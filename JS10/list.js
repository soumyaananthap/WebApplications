var todos = ["Buy new peacock"];

var input = prompt("What would you like to do?");


//anything besides quit, run this code
while(input !== "quit"){
	//handle input
	if(input === "list"){
	console.log(todos);
	} else if(input === "new") {
	//ask new todo
	var newTodo = prompt("Add new todo");
	//add to todos array
	todos.push(newTodo);
	}

	//ask again for new input
	input = prompt("What would you like to do?");

}
console.log("OK, YOU QUIT THE APP");