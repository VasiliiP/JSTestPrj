import { shuffle } from './utils';
import Card from './card';

Array.prototype.shuffle = function () {
  return shuffle(this);
};

const CARDS_IN_DECK = 36;

export default class Deck {
  constructor() {
    const cards = [];
    for (let i = 1; i <= CARDS_IN_DECK; i++) {
      cards.push(new Card(i));
    }
    this.cards = cards;
  }

  upkeep() {
    const { length } = this.cards;
    const shuffledCars = this.shuffle();
    const player1Cards = shuffledCars.slice(0, length / 2);
    const player2Cards = shuffledCars.slice(length / 2);
    return {player1Cards, player2Cards};
  }

  logCards() {
    const cardsNames = [];
    this.cards.forEach(c => cardsNames.push(c.getName()));
    console.log(...cardsNames);
  }

  shuffle() {
    this.cards = this.cards.shuffle();
  }
}
