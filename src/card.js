const COUNT_SAME_SUIT_CARDS = 9;
const suits = ['diamonds', 'hearts', 'clubs', 'spades'];

export default class Card {
  constructor(id) {
    this.id = id;
  }

  getPip() {
    return this.id % COUNT_SAME_SUIT_CARDS;
  }

  getWorth() {
    switch (this.getPip()) {
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

  getValue() {
    switch (this.getPip()) {
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
        return 10;
      case 6:
        return 10;
      case 7:
        return 10;
      case 8:
      default:
        return 11;
    }
  }

  getSuit() {
    return suits[Math.floor(this.id / COUNT_SAME_SUIT_CARDS)];
  }

  getName() {
    return `${this.getWorth()} ${this.getSuit()}`;
  }
}
