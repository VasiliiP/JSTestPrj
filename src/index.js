import doSlot from './slot';
import doDrunkard from './drunkard';
import insert2Body from './utils';
import doBlackJack from './blackJack';

// const result = doSlot();
// const winner = doDrunkard();
// insert2Body('Slot game result:');
// insert2Body(result ? 'You win' : 'You lose');
// console.log(result ? 'You win' : 'You lose');


  const winner = doBlackJack() > 0 ? 1 : 2;
  insert2Body(`BlackJack game result:${winner}`);
  console.log('The winner is: ', winner);
