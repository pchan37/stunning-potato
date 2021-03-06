var list = document.getElementById("thelist");
var num = 1;

var addChild = function() {
    var tag = document.createElement("li");
    tag.innerHTML = "New Thing";
    eventListener(tag);
    list.appendChild(tag);
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
    h.innerHTML = x;
};

var eventListener = function(elem) {
    elem.addEventListener("click", removeChild);
    elem.addEventListener("mouseover",changeHeader);
    elem.addEventListener("mouseout",changeHeaderBack);
};

for (i = 0; i < listElements.length; i++){
    eventListener(listElements[i]);
};

var fibFunction = function(n){
    if (n < 2){
	return 1;
    }else{
	return fibFunction(n - 2) + fibFunction(n - 1);
    }
};

var addFibChild = function(){
    var fibList = document.getElementById('fib');
    var fibChildren = fibList.children;
    var tag = document.createElement("li");
    tag.innerHTML = fibFunction(fibChildren.length);
    fibList.appendChild(tag);
};

var fibChildren = document.getElementById('c')
var c = document.getElementById("c");
c.addEventListener("click", addFibChild);
