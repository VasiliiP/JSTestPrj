import Deck from './cards';

function compare(player1Card, player2Card) {
  const number = Deck.value(player1Card) - Deck.value(player2Card);
  return Math.abs(number) === 8 ? -number : number;
}

export default function doDrunkard() {
  const {player1Cards, player2Cards} = new Deck().upkeep();

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
