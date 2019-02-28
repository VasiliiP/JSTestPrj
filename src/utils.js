// const $ = document.querySelector;

export default function insert2Body(s) {
  // $('body').innerHTML += `<span>${s}</span>`;

  const htmlSpanElement = document.createElement('span');
  htmlSpanElement.appendChild(document.createTextNode(s));
  document.body.appendChild(htmlSpanElement);
}

export function shuffle(array) {
  array = Array.prototype.slice.call(array, 0)

  let i = array.length;
  let j;
  let temp;

  if (i === 0) { return array; }

  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
