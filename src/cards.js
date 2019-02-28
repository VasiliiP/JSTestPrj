import { shuffle } from './utils';

Array.prototype.shuffle = function () {
  return shuffle(this);
};

const COUNT_CARDS = 9;
const suits = ['diamonds', 'hearts', 'clubs', 'spades'];

export default class Deck {
  constructor() {
    this.cards = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, // буби
      9, 10, 11, 12, 13, 14, 15, 16, 17, // червы
      18, 19, 20, 21, 22, 23, 24, 25, 26, // трефы
      27, 28, 29, 30, 31, 32, 33, 34, 35];// пики
  }

  static value(card) {
    return card % COUNT_CARDS;
  }

  static worth(card) {
    switch (this.value(card)) {
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

  static suit(card) {
    return suits[Math.floor(card / COUNT_CARDS)];
  }

  static toString(card) {
    return `${Deck.worth(card)} ${Deck.suit(card)}`;
  }

  upkeep() {
    const { length } = this.cards;
    const shuffledCars = this.shuffle();
    const player1Cards = shuffledCars.slice(0, length / 2);
    const player2Cards = shuffledCars.slice(length / 2);
    return {player1Cards, player2Cards};
  }

  shuffle() {
    this.cards.shuffle();
  }
}
