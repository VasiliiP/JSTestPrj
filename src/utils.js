const $ = document.querySelector;

export default function insert2Body(s) {
  $('body').innerHTML += `<span>${s}</span>`;
}
