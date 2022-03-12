var listElement = {	
	
	"handleClick": function(event) {
		event.target.classList.toggle("done");
	},

	"addClickEvent": function(li) {
		li.addEventListener("click", listElement.handleClick);	
	},

	"addDeleteButton": function(li) {
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete me!"));	
		li.append(btn);

		btn.addEventListener("click", function(){
			listElement.remove(li);
		});
	},

	"remove": function(li) {
		li.remove();
	}

};

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/* list click events */
//old
/*function handleListElementClick(event) {		
	event.target.classList.toggle("done");
}

function addClickEventToListElement(li) {
	li.addEventListener("click", handleListElementClick);	
}

function addDeleteButtonToListElement(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete me!"));	
	li.append(btn);

	btn.addEventListener("click", function(){
		deleteListElement(li);
	});
}

function deleteListElement(li) {
	li.remove();
}*/
/* end list click events */

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	listElement.addClickEvent(li); //addClickEventToListElement(li);
	listElement.addDeleteButton(li); //addDeleteButtonToListElement(li);
}

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var lists_existing = document.querySelectorAll("ul li");

lists_existing.forEach(function(item){
	listElement.addClickEvent(item); //addClickEventToListElement(item);
	listElement.addDeleteButton(item); //addDeleteButtonToListElement(item);
});