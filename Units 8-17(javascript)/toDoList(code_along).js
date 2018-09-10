window.setTimeout(function(){

	var toDos = [];
	var input = "init";

	while(input !== "quit"){
		
		if (input === "list") {
			listToDos();
		}
		else if(input === "new")
		{
			addToDo();	
		}
		else if(input === "delete")
		{
			var toDo = prompt("What todo should be removed?");
			deleteToDo(toDo);
		}

		input = prompt("What would you like to do?");
	}

	console.log("App Has Been Ended");

	function listToDos(){
		console.log("-------------");
			toDos.forEach(function(toDo, i){
					console.log(i + ": " +toDo);
				});
			console.log("-------------");
	}

	function addToDo(){
		var newToDo = prompt("Enter new todo");
			toDos.push(newToDo);
	}

	function deleteToDo(value){
			var index = toDos.indexOf(value);

			if(index != -1)
			{
				toDos.splice(index, 1);
				console.log(value + " has been removed");
			}
			else
			{
				console.log("That is not currently a todo item");
			}
	}
}, 500);