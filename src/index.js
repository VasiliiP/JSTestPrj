// document.querySelector("body").innerHTML += ("<span>1 2 3 4 5 </span>");

import insert2Body from './utils';

insert2Body('<span>1 2 3 4 5 </span>');

const htmlSpanElement = document.createElement('span');
htmlSpanElement.appendChild(document.createTextNode('6789'));
document.body.appendChild(htmlSpanElement);
