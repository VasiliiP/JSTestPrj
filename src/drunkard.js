import { shuffle } from './utils';

Array.prototype.shuffle = function () {
  return shuffle(this);
};

const cards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, // буби
  9, 10, 11, 12, 13, 14, 15, 16, 17, // червы
  18, 19, 20, 21, 22, 23, 24, 25, 26, // трефы
  27, 28, 29, 30, 31, 32, 33, 34, 35];// пики

const COUNT_CARDS = 9;

function value(card) {
  return card % COUNT_CARDS;
}

function worth(card) {
  switch (value(card)) {
    case 0:
      return 6;
    case 1:
      return 7;
    case 2:
      return 8;
    case 3:
      return 9;
    case 4:
      return 10;
    case 5:
      return 'Jack';
    case 6:
      return 'Queen';
    case 7:
      return 'King';
    case 8:
    default:
      return 'Ace';
  }
}

const suits = ['diamonds', 'hearts', 'clubs', 'spades'];

function suit(card) {
  return suits[Math.floor(card / COUNT_CARDS)];
}

function toString(card) {
  return `${worth(card)} ${suit(card)}`;
}

function compare(player1Card, player2Card) {
  const number = value(player1Card) - value(player2Card);
  return Math.abs(number) === 8 ? -number : number;
}

export default function doDrunkard() {
  const { length } = cards;
  const shuffledCars = cards.shuffle();
  console.log(...shuffledCars);
  const player1Cards = shuffledCars.slice(0, length / 2);
  console.log(...player1Cards);
  const player2Cards = shuffledCars.slice(length / 2);
  console.log(...player2Cards);
  let winner;
  let count = 0;
  do {
    count += 1;
    console.log('---------- Set ', count);
    const player1card = player1Cards.pop();
    const player2card = player2Cards.pop();

    console.log(`player 1 card: ${toString(player1card)}`);
    console.log(`player 2 card: ${toString(player2card)}`);

    const compare1 = compare(player1card, player2card);

    if (compare1 > 0) {
      player1Cards.unshift(player1card, player2card);
      winner = 1;
      console.log('The set winner is player 1');
    } else if (compare1 < 0) {
      player2Cards.unshift(player1card, player2card);
      winner = 2;
      console.log('The set winner is player 2');
    } else {
      player1Cards.unshift(player1card);
      player2Cards.unshift(player2card);
      console.log('The set has no winner');
    }
    console.log(`Player 1 has ${player1Cards.length}, Player 2 has ${player2Cards.length}`);
  } while (player1Cards.length !== 0 && player2Cards.length !== 0 && count < 5000);

  return winner;
}
