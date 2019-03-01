import Deck from './deck';

const BET = 10;
const MAX_POINTS = 21;
const COMP_LIMIT_POINTS = 17;

function takeCard(cards) {
  const card = cards.pop();
  console.log(`player got card: ${card.getName()}`);
  return card.getValue();
}

function getUserPoints(cards) {
  let points = 0;
  do {
    points += takeCard(cards);

    while (points < 11) {
      points += takeCard(cards);
    }

    if (points > 21) {
      return 0;
    }
  } while (points < MAX_POINTS && confirm(`You have ${points}. Take more?`));
  return points;
}

function getCompPoints(cards) {
  let points = 0;
  do {
    const card = cards.pop();
    console.log(`comp got card: ${card.getName()}`);
    points += card.getValue();
    if (points > 21) {
      return 0;
    }
  } while (points < MAX_POINTS && points < COMP_LIMIT_POINTS);
  return points;
}

function getWinner(userPoints, compPoints) {
  let winner = 0;
  if (userPoints > compPoints) {
    winner = 1;
  } else if (userPoints < compPoints) {
    winner = -1;
  }
  return winner;
}

function getNewDeck() {
  const deck = new Deck();
  // deck.logCards();
  deck.shuffle();
  // deck.logCards();
  return deck.cards;
}

export default function doBlackJack() {
  let playerMoney = 100;
  let compMoney = 100;

  let count = 0;
  do {
    const cards = getNewDeck();
    count += 1;
    console.log(`------Set #${count}`);

    playerMoney -= BET;
    compMoney -= BET;

    const userPoints = getUserPoints(cards);
    const compPoints = getCompPoints(cards);

    const winner = getWinner(userPoints, compPoints);

    if (winner === 1) {
      playerMoney += BET * 2;
      alert(`You win Set ${count}. Your bank:${playerMoney}. Comp bank:${compMoney}.`);
      console.log('You win');
    } else if (winner === -1) {
      compMoney += BET * 2;
      alert(`Comp win Set ${count}. Your bank:${playerMoney}. Comp bank:${compMoney}.`);
      console.log('Comp win');
    } else {
      playerMoney += BET;
      compMoney += BET;
      alert(`Nobody win Set ${count}. Your bank:${playerMoney}. Comp bank:${compMoney}.`);
      console.log('Nobody win');
    }
    console.log(`player bank = ${playerMoney}`);
    console.log(`comp bank = ${compMoney}`);
  } while (playerMoney !== 0 && compMoney !== 0);

  alert(`The match winner is ${playerMoney === 0 ? 'comp' : 'you'}`);
}
