// var button = document.getElementsByTagName("button")[0];
// //var li=document.querySelectorAll("li");

// button.addEventListener("click", function () {
// 	console.log("click me!!!")
// });
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
// 	if (input.value.length > 0) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li)
// 		//erase the input values
// 		input.value ="";
// 	}
// })

// input.addEventListener("keypress", function(event) {
// 	if (input.value.length > 0 && event.keyCode === 13) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li)
// 		//erase the input values
// 		input.value ="";
// 	}
// })


var button = document.getElementById("enter");
var button2 = document.getElementById("delete");
var input = document.getElementById("userinput");
var ul =document.querySelector("ul");
function inputLength() {
	return input.value.length
}
function createList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	input.value="";
}

function afterClick() {
	//this will run everytime
	if(inputLength() > 0) {
		createList();
	}
}
function afterPress(event) {
	if(inputLength() > 0 && event.keyCode === 13 ) {
		createList();
	}
}
//unless we give it action
button.addEventListener("click", afterClick)

input.addEventListener("keypress", afterPress)

