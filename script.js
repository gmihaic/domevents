var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

/* list click events */
function listClickHandle(event)
{	
	event.target.classList.toggle("done");
}

function listElementAddListenClickEvent(li)
{
	li.addEventListener("click", listClickHandle);	
}

function listElementAddDeleteButton(li)
{
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete me!"));	
	li.append(btn);

	btn.addEventListener("click", function(){
		deleteListFromButton(li);
	});
}

function deleteListFromButton(li)
{
	li.remove();
}
/* end list click events */

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	listElementAddListenClickEvent(li);
	listElementAddDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var lists_existing = document.querySelectorAll("ul li");

lists_existing.forEach(function(item, idx){
	listElementAddListenClickEvent(item);
	listElementAddDeleteButton(item);
});