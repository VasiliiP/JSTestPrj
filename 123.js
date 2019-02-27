//document.querySelector("body").innerHTML += ("<span>1 2 3 4 5 </span>");

const htmlSpanElement = document.createElement("span");
htmlSpanElement.appendChild(document.createTextNode("12345"));
let htmlSpanElement1 = document.body.appendChild(htmlSpanElement);