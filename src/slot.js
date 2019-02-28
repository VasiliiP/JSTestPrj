const BARREL_ITEMS = 7;
const VELOCITY = 10;

function rotateBarrel(number, force) {
  const barrelVelocity = VELOCITY * number * force;
  const z = barrelVelocity % BARREL_ITEMS;
  console.log(z);
  return z;
}

export default function slot() {
  const force = Math.round(Math.random() * 100);
  const barrel1 = rotateBarrel(1, force);
  const barrel2 = rotateBarrel(2, force);
  const barrel3 = rotateBarrel(3, force);
  return barrel1 === barrel2 && barrel2 === barrel3;
}
