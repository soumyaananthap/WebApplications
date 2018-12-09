var tag = document.getElementById("highlight");
console.dir(tag);

var tags = document.getElementsByClassName("bolded");
console.dir(tags[0]);

var tags = document.getElementsByTagName("li");
console.dir(tags[0]);

var tags = document.getElementsByTagName("h1");
tags
//HTMLCollection(2) [h1, h1]
var tags = document.getElementsByTagName("body");
//undefined
//tags
//HTMLCollection [body]0: bodylength: 1__proto__: HTMLCollection
var body = document.getElementsByTagName("li");
//undefined
//body
//HTMLCollection(3) [li#highlight, li.bolded, li.bolded, highlight: li#highlight]
var body = document.getElementsByTagName("body")[0];
//undefined
//body
//<body>​…​</body>​<h1>​Hello​</h1>​<h1>​Goodbye​</h1>​<ul>​…​</ul>​</body>​

var tag = document.querySelector("#highlight"); //by id

var tag = document.querySelector(".bolded"); //by class

var tag = document.querySelector("h1");

var li = document.querySelector("#highlight");

var bolded = document.querySelector(".bolded");


var lis = document.querySelectorAll("li");

// select first <p> tag in 4 ways

var tag = document.getElementById("first");
var tags = document.getElementsByClassName("special")
var tags = document.getElementsByClassName("special")[0]
var tag = document.querySelector("#first");
var tag = document.querySelector(".special");
var tag = document.querySelectorAll(".special")[0];
var tags = document.getElementsByTagName("p")[0];
document.querySelector("p");
document.querySelectorAll("p")[0];
document.querySelector("h1 + p");