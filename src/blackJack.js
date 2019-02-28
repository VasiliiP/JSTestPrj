import Deck from './cards';

const BET = 10;
const MAX_POINTS = 21;


function getUserPoints() {
  const points = 0;
  do {

  } while (points < MAX_POINTS - 1 && confirm('Take more?'))
  return points;
}

function getCompPoints() {
  return undefined;
}

export default function doBlackJack() {
  const cards = new Deck().shuffle();
  let player1Money = 100;
  let player2Money = 100;

  let count = 0;
  do {
    count += 1;
    console.log(`------Set #${count}`);

    player1Money -= BET;
    player2Money -= BET;

    const userPoints = getUserPoints();
    const compPoints = getCompPoints();

  } while (player1Money !== 0 && player2Money !== 0)
  return player1Money - player2Money;
}
