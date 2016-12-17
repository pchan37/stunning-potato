var list = document.getElementById("thelist");
var addChild = function() {
    var tag = document.createElement("li");
    tag.innerHTML = "New Thing";
	eventListener(tag);
    list.appendChild(tag)
};

var b = document.getElementById("b");
b.addEventListener("click", addChild);


var listElements = document.getElementsByTagName("li");
var removeChild = function() {
	this.remove();
};

var x = document.getElementById("h").innerHTML;

var changeHeader = function() {
	var h = document.getElementById("h");
	h.innerHTML = this.innerHTML;
};

var changeHeaderBack = function() {
	var h = document.getElementById("h");
	h.innerHTML = "Hello World!";
};

var eventListener = function(elem) {
	elem.addEventListener("click", removeChild);
	elem.addEventListener("mouseover",changeHeader);
	elem.addEventListener("mouseout",changeHeaderBack);
};

for (i = 0; i < listElements.length; i++){
	eventListener(listElements[i]);
};

