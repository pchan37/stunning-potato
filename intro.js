var list = document.getElementById("thelist");
var addChild = function() {
    var tag = document.createElement("li");
    tag.innerHtml = "New Thing";
    list.appendChild(tag)
}

var b = document.getElementById("b");
b.addEventListener("click", addChild);
