var list = document.getElementById("thelist");
var addChild = function() {
    var tag = document.createElement("li");
    tag.innerHTML = "New Thing";
    list.appendChild(tag)
};

var b = document.getElementById("b");
b.addEventListener("click", addChild);


var listElements = document.getElementsByTagName("li");
var removeChild = function(i) {
	listElements[i].remove();
};

for (i = 0; i < listElements.length; i++)
	listElements[i].addEventListener("click", removeChild(i));